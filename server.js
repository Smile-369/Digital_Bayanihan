// server.js
const express = require('express');
const path = require('path');
const db = require('./database'); // Import the initialized db connection

// Import route handlers
const indexRoutes = require('./routes/index');
const blogRoutes = require('./routes/blog');
const resourcesRoutes = require('./routes/resources');
// Add near other route imports
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// --- Routes ---
app.use('/', indexRoutes);
app.use('/blog', blogRoutes);
app.use('/resources', resourcesRoutes);
app.use('/admin', adminRoutes);
// --- 404 Handler ---
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Page Not Found' }); // Create a simple 404.ejs view
});

// --- Error Handler ---
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!'); // Basic error handling
});


// --- Start Server ---
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Closed the database connection.');
        process.exit(0);
    });
});