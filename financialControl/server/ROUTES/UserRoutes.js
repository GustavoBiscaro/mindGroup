const router = require('express').Router();

const UserController = require('../CONTROLLERS/UserController')

router.post('/register', UserController.register)

module.exports = router;