const AWS = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

const s3 = new AWS.S3({
    endpoint: process.env.DO_SPACES_ENDPOINT,
    accessKeyId: process.env.DO_SPACES_KEY,
    secretAccessKey: process.env.DO_SPACES_SECRET,
})

const uploadService = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: process.env.DO_SPACES_NAME,
        key: (req, file, cb) => {
            cb(null, `${Date.now().toString()}/${file.originalname}`)
        },
    }),
})

module.exports = uploadService
