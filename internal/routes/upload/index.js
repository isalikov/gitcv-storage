const uploadService = require('./service');

const uploadRoute = (req, res) => {
  uploadService(req)
    .then(() => res.json({ status: 'ok' }));
};

module.exports = uploadRoute;
