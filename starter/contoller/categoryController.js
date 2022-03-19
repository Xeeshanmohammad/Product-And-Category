const Category = require('../Model/category')
const { StatusCodes } = require('http-status-codes')
const { createCustomError } = require('../errors/custom-error')

const getAllCategory= async (req, res) => {
    const categories = await Category.find({})
        res.status(StatusCodes.OK).json({categories,count:categories.length})
}

const createCategory = async (req, res) => {
    
    const category = await Category.create(req.body)
    res.status(StatusCodes.OK).json({category})
}

const getSingleCategory = async (req, res,next) => {
    const {id:categoryId} = req.params 
    const category = await Category.findOne({_id:categoryId})
    if(!category){
       
     return next(createCustomError(`No task with this id : ${categoryId}`,404))
    }
     res.status(StatusCodes.CREATED).json({category})

}

const updateCategory = async (req, res, next) => {
    const {id:categoryId} = req.params
    const category = await Category.findOneAndUpdate({_id:categoryId},req.body,{
        new:true,
        runValidators:true},)
    if(!category){
        return next(createCustomError(`No task with this id : ${categoryId}`,404))

    }
    res.status(StatusCodes.OK).json({category})
  
}

const deleteCategory = async (req, res, next) => {
   
    const {id:categoryId} = req.params
    const categories = await Category.findOneAndDelete({_id:categoryId}) 
    if(!categories){
        return next(createCustomError(`No task with this id : ${categoryId}`,404))

    }
    res.status(StatusCodes.OK).json({msg:'Successful! Deleted'})

}

module.exports  = {getAllCategory, createCategory,getSingleCategory, updateCategory, deleteCategory}