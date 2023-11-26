const express = require('express');
const movieRouter = express.Router;

movieRouter.get('/signup', getAllMovie);
movieRouter.post('/add', addMovie);
movieRouter.get('/:id', getAdminById);

module.exports = movieRouter;