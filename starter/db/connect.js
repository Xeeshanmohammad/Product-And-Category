const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url,{
//    -------->   if your mongoose version is less than 6.0 then implement line 5-9..otherwise higher than 6 version then not implement its work properly
    // useNewUrlParser:true,
    //     useCreateIndex:true,
    //     useFindAndModify:false,
    //     useUnifiedTopology:true
  }).then(()=>console.log('connect to the DB......'))
  .catch((error)=>console.log(error));
}
module.exports = connectDB