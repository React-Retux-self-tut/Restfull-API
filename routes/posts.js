const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
        res.send('We are on posts');
    });
router.get('/londons', (req, res) => {
        res.send('We are on Londons specific- post');
    });


    module.exports = router;