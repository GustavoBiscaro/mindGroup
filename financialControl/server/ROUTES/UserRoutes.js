const router = require('express').Router();

const UserController = require('../CONTROLLERS/UserController')

// middleware
const verifyToken = require('../HELPERS/verify-token');
const { imageUpload } = require('../HELPERS/upload-image');

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/checkuser', UserController.checkUser)
router.get('/:id', UserController.getUserById)
router.patch('/edit/:id', verifyToken, imageUpload.single("image"), UserController.editUser)

module.exports = router;