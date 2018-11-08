const mongoose = require('mongoose');

const Student = new mongoose.Schema ({
    name: {type:String, trim:true, default:'', required: true},
    address: {type:String, trim:true, default:'', required: true},
    city: {type:String, trim:true, default:'', required: true},
    state: {type:String, trim:true, default:'', required: true},
    school: {type: String, trim:true, enum: ['Salina Central', 'Salina South'], required: true },
    gradeLevel: {type:String, trim:true, default:'', required: true},
    email: {type:String, trim:true, default:'', required: true},
    phone: {type:String, default:'1234567890', required: true}
})

module.exports = mongoose.model('Student', Student)