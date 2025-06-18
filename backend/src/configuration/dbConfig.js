const mongoose  = require('mongoose');
mongoose.connect("mongodb://localhost:27017/UserDetails");

mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected successfully ");
})

mongoose.connection.on("error",(err)=>{
    console.log(`MongoDB connection error${err}`);
});

module.exports = mongoose;
