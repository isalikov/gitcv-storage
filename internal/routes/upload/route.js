const getFileUrl = (req) => {
    if (!req.file || !req.file.key) {
        return false
    }

    return `${process.env.DO_SPACES_URL}/${req.file.key}`
}

const uploadRoute = (req, res) => {
    try {
        const url = getFileUrl(req)

        if (!url) {
            return res.status(400).end('Invalid Request')
        }

        return res.json({ url })
    } catch (e) {
        // TODO: handle sentry error
        console.error(e)
        return res.sendStatus(500)
    }
}

module.exports = uploadRoute
