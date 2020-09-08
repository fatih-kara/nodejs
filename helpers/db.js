const mongoose = require('mongoose');
const config = require('./config');

const mongoConnectionString = config.mongoClient.connectionString;

module.exports = () => {
    mongoose.connect(mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB:', err);
    });
}