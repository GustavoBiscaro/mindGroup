const multer = require("multer")
const path = require("path")


// Destination to store your images
const imageStorage = multer.diskStorage({
    destination: function (req, file, callback) {

        let folder = ""

        if (req.baseUrl.includes("users")) {
            folder = "users"
        }

        callback(null, `PUBLIC/images/${folder}`)
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + path.extname(file.originalname))
    },
})

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, callback) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return callback(new Error("Please, only .png or .jpg files!"))
        }
        callback(undefined, true)
    },
})

module.exports = { imageUpload }