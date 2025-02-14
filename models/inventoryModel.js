const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    laptop_id: { type: mongoose.Schema.Types.ObjectId, ref: 'laptop' , required: true },  
    stock_quantity: { type: Number, required: true, default: 0, min: 0},
});

const inventoryModel = mongoose.model('inventory', inventorySchema)
module.exports  = inventoryModel