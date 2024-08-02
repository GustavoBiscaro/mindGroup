const jwt = require('jsonwebtoken');

const User = require("../MODELS/User");


// get user by jwt token

const getUserByToken = async (token) => {

    if (!token) {
        return res.status(401).json({ message: 'Access denied!' })
    }

    const decoded = jwt.verify(token, 'oursecret')

    const userId = decoded.id

    const user = await User.findOne({_id: userId})

    return user
}

module.exports = getUserByToken

