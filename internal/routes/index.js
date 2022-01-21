const express = require('express');

const uploadRoute = require('./upload');

const router = express.Router();

router.post('/upload', uploadRoute);

module.exports = router;
