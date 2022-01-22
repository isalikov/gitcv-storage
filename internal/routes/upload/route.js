const getFileUrl = (req) => {
    if (!req.file || !req.file.key) {
        return false
    }

    return `${process.env.DO_SPACES_URL}/${req.file.key}`
}

const uploadRoute = (req, res) => {
    const url = getFileUrl(req)

    if (!url) {
        return res.status(400).end('Invalid Request')
    }

    res.json({ url })
}

module.exports = uploadRoute
