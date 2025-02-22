const mongoose = require('mongoose')


const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },  
    email: { type: String, unique: true, required: true },
    password: {type: String, required: true},
    address: { type: String, required: true },
    purchase_history: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'transaction'
    }] 
});

customerModel = mongoose.model('customer', customerSchema)

module.exports  = customerModel
