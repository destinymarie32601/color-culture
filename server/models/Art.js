const { Schema, model } = require('mongoose');

const artSchema = new Schema({
    artist: [
        {
            type: String,
            required: true,
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

const Art = model('Art', artSchema);


module.exports = Art;