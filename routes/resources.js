// routes/resources.js
const express = require('express');
const router = express.Router();
const { db } = require('../database');

// GET /resources
router.get('/', (req, res, next) => {
    const sql = "SELECT * FROM resources ORDER BY type, title";
    db.all(sql, [], (err, resources) => {
        if (err) {
            return next(err);
        }
        res.render('resources', {
            title: 'Educational Resources - Digital Bayanihan',
            resources: resources
        });
    });
});

module.exports = router;