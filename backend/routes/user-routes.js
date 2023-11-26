const express = require('express');
const userRouter = express.Router;
const { getAllUsers } = require('../controllers/user-controller');
userRouter.get('/', getAllUsers);
userRouter.post('/signup', signUp);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.post('/login', logIn);
userRouter.get('/bookingd/:id', getBookingsofUser);
userRouter.get('/:id', getUserById);

module.exports = userRouter;
