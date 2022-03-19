const express = require('express')
const router = express.Router()

const {
     getAllProducts,
     createProduct,
     getSingleProduct,
     updateProduct,
     deleteProduct
     }
     = require('../contoller/productController')

     

router.route('/readAll').get(getAllProducts)
router.route('/create').post(createProduct)

router.route('/read/:id').get(getSingleProduct)
router.route('/update/:id').patch(updateProduct)
router.route('/delete/:id').delete(deleteProduct)

module.exports = router