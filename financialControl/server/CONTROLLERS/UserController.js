const User = require('../MODELS/User')
const bcrypt = require('bcrypt')

const createUserToken = require('../HELPERS/create-user-token.js') //

module.exports = class UserController {
    static async register(req, res) {
        const { name, email, phone, password, confirmpassword } = req.body

        // validations
        if (!name) {
            res.status(422).json({ message: 'Please, the name is required' })
            return
        }
        if (!email) {
            res.status(422).json({ message: 'Please, the email is required' })
            return
        }
        if (!phone) {
            res.status(422).json({ message: 'Please, the phone is required' })
            return
        }
        if (!password) {
            res.status(422).json({ message: 'Please, the password is required' })
            return
        }
        if (!confirmpassword) {
            res.status(422).json({ message: 'Please, the password confirmation is required' })
            return
        }

        if (password !== confirmpassword) {
            res.status(422).json({
                message: "the password doesn't match" })
            return
        }

        // check if user exists
        const userExists = await User.findOne({ 
            where: {
            email: email
            }
        });

        if(userExists) {
            res
                .status(422)
                .json({
                message: 'Please, use a different email address, this email already exists',
            })
            return
        }

        // create a password
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        // create a user
        const user = new User({
            name,
            email, 
            phone,
            password: passwordHash,
        });

        try {
            const newUser = await user.save();

            await createUserToken(newUser, req, res)
        }catch(error) {
            res.status(500).json({ message: error})
        }
    }
};