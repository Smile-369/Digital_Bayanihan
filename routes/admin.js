const express = require('express');
const router = express.Router();
const { db } = require('../database');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure upload directory
const uploadDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'post-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed (JPEG, PNG, GIF, WEBP)'));
    }
  }
});

// Simple auth middleware
const isAuthenticated = (req, res, next) => {
  if (true /* Replace with actual authentication check */) {
    return next();
  }
  res.status(403).render('admin/error', {
    title: 'Unauthorized',
    message: 'You do not have permission to access this page'
  });
};

// Admin dashboard
router.get('/', isAuthenticated, (req, res) => {
  res.render('admin/dashboard', { title: 'Admin Dashboard' });
});

// List all posts
router.get('/posts', isAuthenticated, (req, res, next) => {
  db.all("SELECT id, slug, title, author, publish_date FROM posts ORDER BY publish_date DESC", [], (err, posts) => {
    if (err) return next(err);
    res.render('admin/posts/list', { 
      title: 'Manage Posts', 
      posts: posts.map(post => ({
        ...post,
        publish_date: post.publish_date ? new Date(post.publish_date).toISOString().split('T')[0] : ''
      }))
    });
  });
});

// New post form
router.get('/posts/new', isAuthenticated, (req, res) => {
  res.render('admin/posts/new', { 
    title: 'New Post',
    post: { publish_date: new Date().toISOString().split('T')[0] } 
  });
});

// Create new post
router.post('/posts', isAuthenticated, upload.single('image'), (req, res, next) => {
  const { slug, title, author, publish_date, excerpt, content } = req.body;
  const image_url = req.file ? '/images/' + req.file.filename : null;

  db.run(
    `INSERT INTO posts (slug, title, author, publish_date, image_url, excerpt, content)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [slug, title, author, publish_date, image_url, excerpt, content],
    function(err) {
      if (err) {
        if (req.file) fs.unlinkSync(path.join(uploadDir, req.file.filename));
        return next(err);
      }
      res.redirect('/admin/posts');
    }
  );
});

// Edit post form
router.get('/posts/:id/edit', isAuthenticated, (req, res, next) => {
  db.get("SELECT * FROM posts WHERE id = ?", [req.params.id], (err, post) => {
    if (err) return next(err);
    if (!post) return res.status(404).render('404', { title: 'Post Not Found' });
    
    res.render('admin/posts/edit', {
      title: 'Edit Post',
      post: {
        ...post,
        publish_date: post.publish_date ? new Date(post.publish_date).toISOString().split('T')[0] : ''
      }
    });
  });
});

// Update post
router.post('/posts/:id', isAuthenticated, upload.single('image'), (req, res, next) => {
  const { slug, title, author, publish_date, excerpt, content, current_image, remove_image } = req.body;
  let image_url = current_image || null;

  // Handle image removal/replacement
  if (remove_image === 'on' && current_image) {
    try {
      fs.unlinkSync(path.join(__dirname, '../public', current_image));
      image_url = null;
    } catch (err) {
      console.error("Error deleting image:", err);
    }
  } else if (req.file) {
    image_url = '/images/' + req.file.filename;
    if (current_image) {
      try {
        fs.unlinkSync(path.join(__dirname, '../public', current_image));
      } catch (err) {
        console.error("Error replacing old image:", err);
      }
    }
  }

  db.run(
    `UPDATE posts SET 
      slug = ?, title = ?, author = ?, 
      publish_date = ?, image_url = ?, 
      excerpt = ?, content = ?
     WHERE id = ?`,
    [slug, title, author, publish_date, image_url, excerpt, content, req.params.id],
    function(err) {
      if (err) {
        if (req.file) fs.unlinkSync(path.join(uploadDir, req.file.filename));
        return next(err);
      }
      res.redirect('/admin/posts');
    }
  );
});

// Delete post
router.post('/posts/:id/delete', isAuthenticated, (req, res, next) => {
  db.get("SELECT image_url FROM posts WHERE id = ?", [req.params.id], (err, post) => {
    if (err) return next(err);
    
    db.run("DELETE FROM posts WHERE id = ?", [req.params.id], function(err) {
      if (err) return next(err);
      
      if (post?.image_url) {
        try {
          fs.unlinkSync(path.join(__dirname, '../public', post.image_url));
        } catch (err) {
          console.error("Error deleting image file:", err);
        }
      }
      
      res.redirect('/admin/posts');
    });
  });
});

module.exports = router;