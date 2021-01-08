const router = require('express').Router()
const ProductController = require('../controllers/productController')
const authentication = require('../middleware/authentication')


router.use(authentication)


// Product
router.post('/', ProductController.createProduct)
router.get('/', ProductController.fetchProduct)
router.get('/:id', ProductController.fetchProductById)
router.put('/:id', ProductController.updateProduct)
router.delete('/:id', ProductController.deleteProduct)

module.exports = router