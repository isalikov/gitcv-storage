const express = require('express');
const dotenv = require('dotenv');

const router = require('../../internal/routes');

(() => {
  dotenv.config();

  const app = express();

  app.use(router);
  app.listen(process.env.PORT);
})();
