// routes/index.js
const express = require('express');
const router = express.Router();
const { db } = require('../database');

// GET / - Home page
router.get('/', (req, res, next) => {
    const factsSql = "SELECT * FROM facts ORDER BY id";
    // Get maybe 3 recent posts for the preview section
    const postsSql = "SELECT slug, title, excerpt, image_url, author, publish_date FROM posts ORDER BY publish_date DESC LIMIT 3";

    db.all(factsSql, [], (err, facts) => {
        if (err) {
            return next(err); // Pass error to error handler
        }
        db.all(postsSql, [], (err, posts) => {
            if (err) {
                return next(err);
            }
            res.render('index', {
                title: 'Digital Bayanihan',
                facts: facts,
                posts: posts // Pass posts to the template
            });
        });
    });
});

// GET /#facts - This will be handled by the browser scrolling on the home page.
// GET /#contact - Assume contact is part of the home page footer or a static section.

module.exports = router;