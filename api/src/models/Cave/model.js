const mongoose = require('mongoose');

const { schema } = require('./schema');


const Cave = mongoose.model('Cave', schema);


module.exports = { Cave };