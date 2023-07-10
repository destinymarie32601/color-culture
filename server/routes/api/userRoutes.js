const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    login,
} = require('../../controllers/userController');

// Import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/').get(getUsers).post(authMiddleware, createUser);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/login').post(login);

module.exports = router;