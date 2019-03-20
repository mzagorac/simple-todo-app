const mongoose = require('mongoose');
const config = require('../config/mongo.config');

mongoose.connect(config.getUrl(), { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'conection error:'));
db.once('open', function() {
    console.log('Sucesfuly connected...');
});

module.exports = db;