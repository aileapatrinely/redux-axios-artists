// artist.router.js

const express = require('express');
const router = express.Router();
// Using a array of data on the server, we will eventually
// move this back into the database.
const artists = require('../modules/artist.data');
let nextId = artists.length;

router.delete('/:id', (req, res) => {    
    // TODO: Use filter to remove the artist
    // artists = artists.filter(...)

    res.sendStatus(200);
});

// GET all the books
router.post('/', (req, res) => {
    console.log('In artist POST with', req.body);
    const artistToAdd = req.body;
    // add an id to the incoming artist
    artistToAdd.id = nextId;
    nextId += 1;
    artists.push(artistToAdd);
    res.send(201);
}); // END GET Route

// GET all the books
router.get('/', (req, res) => {
    res.send(artists);
}); // END GET Route

module.exports = router;