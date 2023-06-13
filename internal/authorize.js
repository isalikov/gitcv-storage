const httpStatus = require('http-status')

const redis = require('./redis')
const authorize = async (req, res, next) => {
    try {
        const { session } = req.headers

        if (!session) {
            res.sendStatus(httpStatus.UNAUTHORIZED)

            return
        }

        const data = await redis.hGetAll(session)

        if (!data) {
            res.sendStatus(httpStatus.UNAUTHORIZED)

            return
        }

        const [githubID] = Object.keys(data)
        const githubToken = data[githubID]

        if (!githubID || !githubToken) {
            res.sendStatus(httpStatus.UNAUTHORIZED)

            return
        }

        res.locals = {
            githubID: parseInt(githubID, 10),
            githubToken,
        }

        next()
    } catch (e) {
        // TODO: log ssentry error
        console.error(e)
    }
}

module.exports = authorize
