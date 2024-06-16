//Requires express to use the express router 
const express = require('express')

//Requires the controllers from workoutController to use in the routes
const {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

//Router variable to gain access to the app in the server.js file
const router = express.Router()

//GET request to get all workout documents
router.get('/', getAllWorkouts)

//GET request to get a single workout document
router.get('/:id', getWorkout)

//POST request to create a new workout document
router.post('/', createWorkout)

//DELETE request to delete a workout document
router.delete('/:id', deleteWorkout)

//PATCH request to update a workout document
router.patch('/:id', updateWorkout)

module.exports = router