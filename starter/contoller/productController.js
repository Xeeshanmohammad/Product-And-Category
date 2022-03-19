const Product = require('../Model/product')
const { StatusCodes } = require('http-status-codes')
const { createCustomError } = require('../errors/custom-error')

const getAllProducts = async (req, res) => {
    const products = await Product.find({}).populate("categoryId")
    res.status(StatusCodes.OK).json({ products, count: products.length })
}

const createProduct = async (req, res) => {
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({ product })
}

const getSingleProduct = async (req, res, next) => {
    const { id: productId } = req.params
    const products = await Product.findOne({ _id: productId })
    if (!products) {

        return next(createCustomError(`No task with this id : ${productId}`, 404))
    }
    res.status(StatusCodes.CREATED).json({ products })

}

const updateProduct = async (req, res, next) => {
    const { id: productId } = req.params
    const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
        new: true,
        runValidators: true
    })
    if (!product) {
        return next(createCustomError(`No task with this id : ${productId}`, 404))

    }
    res.status(StatusCodes.OK).json({ product })

}

const deleteProduct = async (req, res, next) => {

    const { id: productId } = req.params
    const products = await Product.findOneAndDelete({ _id: productId })
    if (!products) {
        return next(createCustomError(`No task with this id : ${productId}`, 404))

    }
    res.status(StatusCodes.OK).json({ msg: 'Successful! Deleted' })

}

module.exports = { getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct }
