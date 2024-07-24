const jwt = require('jsonwebtoken');
const getToken = require('./get-token');

// middleware to validate token 
const checkToken = (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Access denied!' })
    }

    const token = getToken(req)

    if (!token) {
        return res.status(401).json({ message: 'Access denied!' })
    }

    try {
        const verified = jwt.verify(token, 'oursecret')
        req.user = verified
        next()
    } catch (e) {
        return res.status(401).json({ message: 'Invalid Token!' })
    }

}

module.exports = checkToken