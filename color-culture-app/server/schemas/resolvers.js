const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find({});
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return User.create({ username, email, password });
        },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
    },
};

module.exports = resolvers;