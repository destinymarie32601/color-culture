const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find().then(async (users) => {
            const userObj = {
                users,
            };
            return res.json(userObj);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    // Get a single user
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }

        res.json(foundUser);
    },
    // Create a new user
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    // Delete a user
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>
        !user
            ? res.status(404).json({ message: 'No such User exists'})
            : User.findOneAndUpdate(
                { users: req.params.userId },
                { $pull: { users: req.params.userId } },
                { new: true }
            )
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Login a user, sign a token, and send it back (to client/src/components/pages/Login.js)
    // {body} is destructured req.body
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });

        if (!user) {
            return res.status(400).json({ message: 'Cant find this user' });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
};