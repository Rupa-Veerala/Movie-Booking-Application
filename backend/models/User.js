const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
        minLength: 6
    },
    
    bookings: [{
        type: mongoose.Types.ObjectId,
        ref:'Booking'
    }]
})  
const user = mongoose.model('User', UserSchema);
model.exports = user;