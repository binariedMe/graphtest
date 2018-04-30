
const mongoose = require('mongoose');
let mongoConnectionUri = 'mongodb://localhost/test';

mongoose.connect(process.env.mongoconnectionuri || mongoConnectionUri);

module.exports = mongoose;
