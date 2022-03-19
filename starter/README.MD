#### Setup Basic Express Server

- [] import express and assign to variable
- [] setup start port variable (5000) and start function

#### Connect To DB

- [] get connection string
- [] setup .env with MONGO_URI variable and assign the value
- [] import 'dotenv' and setup package
- [] import connect() and invoke in the starter
- [] restart the server
- [] mongoose V6 info

#### Basic Routes and Middleware

- [] setup / GET Route
- [] setup express.json() middleware
- [] setup 404 and errorHandler middleware
- [] import 'exress-async-errors' package

#### 404 vs ErrorHandler Middleware

#### 404 vs notFound Middleware

#### npm Pacakge

- [Morgan Package](https://www.npmjs.com/package/morgan)
- [nodemon Package](https://www.npmjs.com/package/nodemon)
- [mongoose Package](https://www.npmjs.com/package/mongoose)
- [http-status-codes Package](https://www.npmjs.com/package/http-status-codes)
- [express-async-errors Package](https://www.npmjs.com/package/express-async-errors)
- [dotenv Package](https://www.npmjs.com/package/dotenv)
- [express Package](https://www.npmjs.com/package/express)

#### Product Model

- [] create models folder and product.js file
- [] create schema with productName,unitPrice, qtyPerUnit, unitInStock, disContinue, categoryId)
- [] export mongoose model

#### Product Routes Structure

- [] add productController file
- [] export (getAllProducts, createProduct,getSingleProduct, updateProduct, deleteProduct) functions
- [] res.send('some string value')
- [] setup productRoutes file
- [] import all controllers
- [] setup just one route - router.route('/readAll').get(getAllProducts);
- [] import productRoutes as productRouter in the app.js
- [] setup app.use('/', productRouter)

#### GetAllProducts

- [] Get all product property
- [] pass products into Product.find({})
- [] and also populate (getAllProduct)
- [] pass status(StatusCodes.OK)

#### GetSingleProduct

- [] Get single product property
- [] getSingleProduct where id matches productId
- [] check for id and productId in the body
- [] if one is missing, send 400 (optional)
- [] use findOne()

#### Create Product

- [] create product property on req.body and set it equal to productId (req.body)
- [] pass req.body into Product.create
- [] send back the product

#### updateProduct with Product.findOneAndUpdate()

- [] UpdateProduct where id matches id params
- [] check for id and productId in the body
- [] if one is missing, send 400 (optional)
- [] use findOneAndUpdate()

#### deleteProduct with Product.findOneAndDelete()

- [] deleteProduct where id matches id params
- [] check for id and productId in the body
- [] if one is missing, send 400 (optional)
- [] use findOneAndDelete()
- [] pass message (msg:'Successfully! deleted')

#### Product Model

- [] create Product.js in Model folder
- [] create Schema
- [] ProductName : {type:String}
- [] unitPrice: {type:Number}
- [] unitInStock: {type:Number}
- [] discontinue: {type:String}
- [] categoryId: {type:String}
- [] set timestamps
- [] export Product model

#### Product Structure

- [] add productController file in controllers
- [] export (createProduct, getAllProducts,
  getSingleProduct, updateProduct, deleteProduct) functions
- [] res.send('function name')
- [] setup productRoutes file in routes
- [] import all controllers
- [] import productRoutes as productRouter in the app.js
- [] setup app.use('/, productRouter)

#### Product Routes in Postman

- [] create new folder (product)
- [] Again Add folder on category by GetAllProduct, createProduct and so on..
- [] Also edit localhost:5000 to set - {{url}} at a global environment

#### Category Model

- [] create Category.js in model folder
- [] create Schema
- [] name : {type:String}
- [] export Category model

#### Category Routes Structure

- [] add categoryController file
- [] export (getAllCategory, createCategory,getSingleCategory, updateCategory, deleteCategory) functions
- [] res.send('some string value')
- [] setup categoryRoutes file
- [] import all controllers
- [] setup just one route - router.route('/readAll').get(getAllCategory);
- [] import categoryRoutes as categoryRouter in the app.js

#### GetAllCategory

- [] Get all Category property
- [] pass Category into Category.find({})
- [] pass status(StatusCodes.OK)

#### GetSingleCategory

- [] Get single Category property
- [] getSingleCategory where id matches categoryId
- [] check for id and categoryId in the body
- [] if one is missing, send 400 (optional)
- [] use findOne()

#### Create categoryId

- [] create category property on req.body and set it equal to categoryId (req.body)
- [] pass req.body into Category.create
- [] send back the category

#### updateCategory with Category.findOneAndUpdate()

- [] UpdateCategory where id matches id params
- [] check for id and categoryId in the body
- [] if one is missing, send 400 (optional)
- [] use findOneAndUpdate()

#### deleteCategorywith Category.findOneAndDelete()

- [] deleteCategory where id matches id params
- [] check for id and categoryId in the body
- [] if one is missing, send 400 (optional)
- [] use findOneAndDelete()
- [] pass message (msg:'Success')

#### Category Model

- [] create Category.js in models folder
- [] create Schema
- [] categoryName : {type:String}
- [] export Category model

#### Category Structure

- [] add categoryController file in controllers
- [] export (createCategory, getAllCategory,
  getSingleCategory, updateCategory, deleteCategory) functions
- [] res.send('function name')
- [] setup categoryRoutes file in routes
- [] import all controllers
- [] import categoryRoutes as categoryRouter in the app.js
- [] setup app.use('/', categoryRouter)

#### Category Routes in Postman

- [] create new folder (category)
- [] Again Add folder on category by GetAllCategory, createCategory and so on..
- [] Also edit localhost:5000 set- to {{url}} at a global environment
