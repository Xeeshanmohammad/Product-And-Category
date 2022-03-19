const express = require('express')
const router = express.Router()


const { getAllCategory,
        createCategory,
        getSingleCategory,
        updateCategory,
        deleteCategory }
        = require('../contoller/categoryController')


router.route('/readAlls').get(getAllCategory)
router.route('/creates').post(createCategory)

router.route('/reads/:id').get(getSingleCategory)
router.route('/updates/:id').patch(updateCategory)
router.route('/deletes/:id').delete(deleteCategory)

module.exports = router