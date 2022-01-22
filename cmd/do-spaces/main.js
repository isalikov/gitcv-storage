require('../../internal/env')

const express = require('express')

const router = require('../../internal/routes')

;(() => {
    const app = express()

    app.use(router)
    app.listen(process.env.PORT)
})()
