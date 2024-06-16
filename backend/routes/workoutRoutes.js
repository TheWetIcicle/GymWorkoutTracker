//Requires express to use the express router 
const express = require('express')

//Router variable to gain access to the app in the server.js file
const router = express.Router()

//GET request to get all workout documents
router.get('/', (req, res) => {
    res.json({mssg: "GETs workout docs"})
})

//GET request to get a single workout document
router.get('/:id', (req, res) => {
    res.json({mssg: "GETs a workout docs"})
})

//POST request to create a new workout document
router.post('/', (req, res) => {
    res.json({mssg: "POSTs workout docs"})
})

//DELETE request to delete a workout document
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETEs workout docs"})
})

//PATCH request to update a workout document
router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATEs workout docs"})
})

module.exports = router