const { Schema } = require('mongoose');

const artSchema = new Schema({
    artist: [
        {
            type: String,
        },
    ],
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
});

module.exports = artSchema;