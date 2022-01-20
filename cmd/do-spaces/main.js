const express = require('express');

const upload = require('../../middlewares/upload');

const app = express();

app.post('/upload', upload);

app.listen(3001);
