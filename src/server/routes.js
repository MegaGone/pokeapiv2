import express from 'express';
import path from 'path';
const controller = require('./controller');

const router = express.Router();

// Client
router.get('/home', (req, res) => {
    res.sendFile(path.resolve('C:/Users/mofrc/OneDrive/Escritorio/Udemy/node/try' + '/dist/index.html'));
});

// API
router.get('/pokemon', (req, res) => {
    res.sendFile(path.resolve('C:/Users/mofrc/OneDrive/Escritorio/Udemy/node/try' + '/dist/search.html'));
});

router.get('/pokemon/:id', (req, res) => {
    res.sendFile(path.resolve('C:/Users/mofrc/OneDrive/Escritorio/Udemy/node/try' + '/dist/pokemon.html'));
});

router.get('/prueba', controller.prueba)
module.exports = router;