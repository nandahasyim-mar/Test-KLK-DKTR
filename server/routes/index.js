const router = require('express').Router()
const productRouter = require('./productRouter')
const UserController = require('../controllers/userController')


// User
router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.use('/products', productRouter)




module.exports = router