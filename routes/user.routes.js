const express = require('express');
const { getRandomUser, getAllUser, postUser, updateUser, deleteUser, updateBulkUsers } = require('../controlers/userController');



const route = express.Router();



route.get('/random', getRandomUser)
route.get('/all', getAllUser)
route.post('/save', postUser)
route.patch('/update/:id', updateUser)
route.delete('/delete/:id', deleteUser)
route.patch('/bulk-update', updateBulkUsers)




module.exports = route;

