const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    customer_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'customer', 
        required: true 
    },
    laptop_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'laptop',
        required: true
    }], 
    total_price: { type: Number, required: true },
    payment_status: { type: Boolean, required: true },
    transaction_date: { type: Date, default: Date.now },
});

const transactionModel = mongoose.model('transaction', transactionSchema);

module.exports = transactionModel;
