const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
        await User.deleteMany({});
        await User.create(userSeeds);

        console.log('Done!');
        process.exit(0);
});