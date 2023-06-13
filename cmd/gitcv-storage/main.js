require('../../internal/env')

const cors = require('cors')
const express = require('express')

const authorize = require('../../internal/authorize')
const redis = require('../../internal/redis')
const router = require('../../internal/routes')

;(async () => {
    await redis.connect()

    const app = express()

    app.use(cors())
    app.use(authorize)
    app.use(router)
    app.listen(process.env.PORT)
})()
