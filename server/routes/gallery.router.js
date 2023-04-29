const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');
const { Console } = require('console');

// DO NOT MODIFY THIS FILE FOR BASE MODE
// "TRY ME" ~Anders

// POST ROUTE
router.post('/', (req, res) => {
    console.log("In POST route, here's data to send to db:", req.body);

    const sqlText = `
        INSERT INTO gallery ("path", "description", "likes")
            VALUES
            ($1, $2, $3);
    `;

    const sqlValues = [req.body.path, req.body.description, 0];

    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            console.log("Successfully POSTed to DB:", dbRes);
            res.sendStatus(201);
        }).catch((dbErr) => {
            console.log("Error POSTing to db:", dbErr);
        })
})//END POST route

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

// DELETE route
router.delete('/:id', (req, res) => {

    let sqlText = `
        DELETE FROM gallery
            WHERE id = $1;
    `;

    pool.query(sqlText, [req.params.id])
        .then((dbRes) => {
            console.log("Successfully Deleted item:", dbRes);
            res.sendStatus(200);
        }).catch((dbErr) => {
            console.log("Error connecting to DB in DELETE route:", dbErr);
        })
}) // end DELETE route

module.exports = router;