require('../../internal/env')

const cors = require('cors')
const express = require('express')

const router = require('../../internal/routes')

;(() => {
    const app = express()

    app.use(cors())
    app.use(router)
    app.listen(process.env.PORT)
})()
