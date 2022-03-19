const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, 'Please provide All category name'],
        trim: true,
        maxlength: [ 20 , 'Name cannot be more than 20  characters'],
        // enum: {
        //     values: ['Electronic', 'Cloths', 'Footwear', 'Mobiles', 'Home', 'Appliances', 'Beauty and More'],
        //     message: '{VALUES} is not supported'
        // },
    },
    
})

module.exports = mongoose.model('Category', categorySchema)