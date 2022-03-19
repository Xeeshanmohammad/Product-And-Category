// Firslty I will download a mongoose library----(npm i mongoose)
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

    productName: {
        type: String,
        trim: true,
        required: [true, 'Please provide product name'],
        maxlength: [20, 'Name cannot be more than 20 characters'],
        
    },

    unitPrice: {
        type: Number,
        required: [true, 'Please provide product price'],
        default: 0,
    },

    qtyPerUnit: {
        type: Number,
        required: [true, 'Please provide product quantity'],
        default: 0
    },

    unitInStock: {
        type: Number,
        required: true,
    },

    categoryId: {
        type: mongoose.Schema.Types.ObjectId ,
        required: false,
        ref: 'Category'
    },


    discontinued: {
        type: Boolean,
        required: false,
    },

}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema)