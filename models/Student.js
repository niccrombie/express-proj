const mongoose = require('mongoose');

const Student = new mongoose.Schema ({
    name: {type:String, trim:true, default:''},
    address: {type:String, trim:true, default:''},
    city: {type:String, trim:true, default:''},
    state: {type:String, trim:true, default:''},
    school: [{type: mongoose.Schema.Types.ObjectId, ref: 'School'}],
    gradeLevel: {type:String, trim:true, default:''},
    email: {type:String, trim:true, default:''},
    phone: {type:String, default:'1234567890'}
})

module.exports = mongoose.model('Student', Student)