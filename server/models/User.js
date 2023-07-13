const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const artSchema = require('./Art');

const userSchema = new Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
},
{
    toJSON: {
        virtuals: true,
    },
}
);

// Hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// Custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// When we query a user, we'll also get another field called 'artCount' with number of artworks we have
userSchema.virtual('artCount').get(function () {
    return this.artworks.length;
});

const User = model('user', userSchema);

module.exports = User;