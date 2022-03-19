const express = require('express')
const app = express()
require('express-async-errors')
require('dotenv').config()
const morgan = require('morgan')

const ProductRouter = require('./routes/productRoute')
const CategoryRouter = require('./routes/categoryRoute')


const errorHandler = require('./Middleware/error_handle')
const notFound = require('./Middleware/not_found')

//connect DataBase
const connectDB = require('./db/connect')

// Middleware

app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Product and Category')
})

app.use('/api/v1', ProductRouter);
app.use('/api/v1', CategoryRouter);

app.use(notFound)
app.use(errorHandler)

const port = 5000 || process.env.PORT
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port : ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()