const mongoose = require('mongoose');

const School = new mongoose.Schema ({
    name: {type:String, default:''},
    address: {type:String, default:''},
    city: {type:String, default:''},
    state: {type:String, default:''},
    usd: {type:String, default:''}
})

module.exports = mongoose.model('School', School)