const express = require('express')

const uploadRoute = require('./upload/route')
const uploadService = require('./upload/service')

const router = express.Router()

router.post('/upload', uploadService.single('data'), uploadRoute)

module.exports = router
