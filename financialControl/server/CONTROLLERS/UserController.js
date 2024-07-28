const User = require('../MODELS/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// HELPERS
const getUserByToken = require('../HELPERS/get-user-by-token')
const createUserToken = require('../HELPERS/create-user-token')
const getToken = require('../HELPERS/get-token')


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
                message: "the password doesn't match"
            })
            return
        }

        // check if user exists
        const userExists = await User.findOne({
            where: {
                email: email
            }
        });

        if (userExists) {
            res
                .status(422)
                .json({
                    message: 'Please, use a different email address, this email already exists!',
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
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    static async login(req, res) {
        const { email, password } = req.body

        if (!email) {
            res.status(422).json({ message: 'Please, the email is required' })
            return
        }

        if (!password) {
            res.status(422).json({ message: 'Please, the password is required' })
            return
        }

        // check if the user does not already exist
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            res
                .status(422)
                .json({
                    message: 'User with this email is not registered',
                })
            return
        }

        // check if password match with bcrypt
        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) {
            res
                .status(422)
                .json({
                    message: 'The passwords does not match!',
                })
            return
        }

        await createUserToken(user, req, res)
    }

    static async checkUser(req, res) {

        let currentUser

        if (req.headers.authorization) {

            const token = getToken(req)
            const decoded = jwt.verify(token, 'oursecret')

            currentUser = await User.findByPk(decoded.id)

            currentUser.password = undefined
        } else {
            currentUser = null
        }

        res.status(200).send(currentUser)
    }

    static async getUserById(req, res) {

        const id = req.params.id

        const user = await User.findByPk(id, {
            attributes: { exclude: ['password'] }
        });

        if (!user) {
            res
                .status(422)
                .json({
                    message: 'User not found',
                })
            return
        }

        res.status(200).send({ user })
    }

    static async editUser(req, res) {
        const id = req.params.id

        // check if user exists
        const token = getToken(req)
        const user = await getUserByToken(token)

        const { name, email, phone, password, confirmpassword } = req.body



    if(req.file) {
            user.image = req.file.filename
        }

        // validations
        if (!name) {
            res.status(422).json({ message: 'Please, the name is required' })
            return
        }
        if (!email) {
            res.status(422).json({ message: 'Please, the email is required' })
            return
        }

        // check if email has already taken
        const userExists = await User.findOne({where: { email: email} });

        if (user.email !== email && userExists) {
            res.status(422).json({
                message: 'Use another email, please!',
            })
            return
        }

        user.email = email


        if (!phone) {
            res.status(422).json({ message: 'Please, the phone is required' })
            return
        }

        user.phone = phone 

        if (password !== confirmpassword) {
            res.status(422).json({
                message: "the password doesn't match"
            })
            return
        } else if(password === confirmpassword && password != null) {
            // creating a password
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);

            user.password = passwordHash

        }
        
        try {
            // returns user updated data
            if (name) user.name = name;
            if (email) user.email = email;
            if (phone) user.phone = phone;

            if (password && confirmpassword) {
                if (password !== confirmpassword) {
                    return res.status(422).json({ message: "The passwords don't match" });
                }

                // Atualiza a senha
                const salt = await bcrypt.genSalt(12);
                user.password = await bcrypt.hash(password, salt);
            }

            await user.save();

            res.status(200).json({
                message: 'User updated successfully',
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                }
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};