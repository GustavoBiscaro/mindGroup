const User = require('../MODELS/User')

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
                message: "the password doesn't match",
            })
            return
        }

        // check if user exists
        const userExists = await User.findOne({ email: email})

        if(userExists) {
            res.status(422).json({
                message: "Please, use a different email address, this email already exists",
            })
            return
        }

        


    }
}