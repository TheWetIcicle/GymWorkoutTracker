//This requires the 
require('dotenv').config()

//This requires the express package
const express = require('express')

//This requires the mongoose package
const mongoose = require('mongoose')

//This requires the workoutRoutes file Router 
const routes = require('./routes/workoutRoutes')

//Creates the express application
const app = express()

//Middleware

//Checks if any JSON is being passed through and attaches it to request handler
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//Uses the router from workoutRoutes, which is in a different file to look cleaner
app.use('/api/workoutRoutes', routes)

//Connects to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //Listens for Requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening for requests')
        })
    })
    .catch((error) => {
        console.log(error)
    })


