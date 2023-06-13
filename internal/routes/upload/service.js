const AWS = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const mime = require('mime-types')
const uuid = require('uuid')

const s3 = new AWS.S3({
    endpoint: process.env.DO_SPACES_ENDPOINT,
    accessKeyId: process.env.DO_SPACES_KEY,
    secretAccessKey: process.env.DO_SPACES_SECRET,
})

const uploadService = multer({
    limits: {
        fields: process.env.MAX_FILE_SIZE,
        fileSize: process.env.MAX_FILE_SIZE,
        files: process.env.MAX_FILE_SIZE,
        parts: process.env.MAX_FILE_SIZE,
    },
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: process.env.DO_SPACES_NAME,
        key: (req, file, cb) => {
            const path = `${uuid.v4()}.${mime.extension(file.mimetype)}`

            cb(null, `${Date.now().toString()}/${path}`)
        },
    }),
})

module.exports = uploadService
