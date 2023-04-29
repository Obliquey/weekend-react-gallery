const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE
// "TRY ME" ~Anders

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    console.log("this is the gallery id to update:", galleryId)
    
    const sqlText = `
        UPDATE gallery
            SET likes = (likes + 1)
            WHERE id = $1;
    `;

    pool.query(sqlText, [galleryId])
        .then((dbRes) => {
            console.log(`Successfully updated likes of ${galleryId}`, dbRes.rows);
            res.send(200);
        }).catch((dbErr) => {
            console.log("Error updating likes in DB", dbErr);
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {


    pool.query(`SELECT * FROM "gallery" ORDER BY "path" ASC;`)
        .then((dbRes) => {
            res.send(dbRes.rows)
        }).catch((dbErr) => {
            console.log("Error connecting to db,", dbErr);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;