// routes/blog.js
const express = require('express');
const router = express.Router();
const { db } = require('../database');

// GET /blog - Blog listing page
router.get('/', (req, res, next) => {
    const sql = "SELECT slug, title, excerpt, image_url, author, publish_date FROM posts ORDER BY publish_date DESC";
    db.all(sql, [], (err, posts) => {
        if (err) {
            return next(err);
        }
         // Pass both sets of posts for now, matching the original duplicated structure
         // Ideally, you'd implement proper categorization later.
        res.render('blog', {
            title: 'Blog - Digital Bayanihan',
            postsRizal: posts,
            postsNasyonalismo: posts // Using the same data for both sections as per original HTML
        });
    });
});

// GET /blog/:slug - Single blog post
router.get('/:slug', (req, res, next) => {
    const slug = req.params.slug;
    const postSql = "SELECT * FROM posts WHERE slug = ?";
    const recentPostsSql = "SELECT slug, title FROM posts ORDER BY publish_date DESC LIMIT 6"; // For sidebar

    db.get(postSql, [slug], (err, post) => {
        if (err) {
            return next(err);
        }
        if (!post) {
            // Post not found, render 404 or redirect
            return res.status(404).render('404', { title: 'Post Not Found' });
        }

        db.all(recentPostsSql, [], (err, recentPosts) => {
             if (err) {
                // Log error but still render post if possible
                console.error("Error fetching recent posts:", err.message);
                recentPosts = []; // Provide empty array if query fails
             }
            res.render('post', {
                title: `${post.title} - Blog`, // Dynamic title
                post: post,
                recentPosts: recentPosts // Pass recent posts for the sidebar
            });
        });
    });
});


module.exports = router;