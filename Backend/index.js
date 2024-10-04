const express = require('express')
const mongoose = require("mongoose")
const userHandler = require('./routeHandler/userHandler')
const cors = require('cors')

// express app initialization
const app = express();
app.use(cors())
app.use(express.json());


// database connection with mongoose
// mongodb://localhost:27017

mongoose.connect('mongodb://localhost/user',)
.then(()=>console.log('connection successful'))
.catch(err =>console.log(err))

// application routes
app.use('/user', userHandler)

// default error handler
function errorHandler(err, reg, res, nest){
    if (res.headerSent){
        return next(err);
    }
    res.status(500).json({error:err})
}

app.listen(3000, ()=>{
    console.log("app listening at port 3000")
})