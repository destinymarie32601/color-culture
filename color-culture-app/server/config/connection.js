const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongo://127.0.0.1:27017/colorculture', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;