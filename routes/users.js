// Our router module
const router = require('express').Router();

// Our controller
const UsersController = require('../controllers/usersController');

// Our routes
router.get(`/new`, UsersController.new);
router.post('/', UsersController.create);

// We have to export our changes
module.exports = router;