
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_UL);
const db = mongoose.connection;

db.on('open', ()=> console.log('word'));

module.exports = mongoose;