const sqlite3 = require('sqlite3').verbose();

const path = require('path');
const dbPath = path.resolve(__dirname, 'data/bayanihan.db');
const db = new sqlite3.Database(dbPath);
// database.js
module.exports = db;


const ready = new Promise((resolve, reject) => {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS facts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                source TEXT NOT NULL UNIQUE,
                definition TEXT NOT NULL,
                icon_class TEXT DEFAULT 'fa-solid fa-chess'
            )
        `);
        db.run(`
            CREATE TABLE IF NOT EXISTS resources (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                type TEXT NOT NULL CHECK(type IN ('video', 'article')),
                url TEXT NOT NULL UNIQUE,
                icon_class TEXT NOT NULL
            )
        `);
        db.run(`
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                slug TEXT NOT NULL UNIQUE,
                title TEXT NOT NULL,
                author TEXT,
                publish_date TEXT,
                image_url TEXT,
                excerpt TEXT,
                content TEXT
            )
        `, (err) => {
            if (err) {
                console.error("Error creating tables:", err.message);
                reject(err);
            } else {
                resolve();
            }
        });
    });
});

module.exports = { db, ready };
