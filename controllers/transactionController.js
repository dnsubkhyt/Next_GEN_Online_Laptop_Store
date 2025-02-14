const Transaction = require('../models/transactionModel')
const Customer = require('../models/customerModel')
const Inventory = require('../models/inventoryModel')
const Laptop = require('../models/laptopModel')
const mongoose = require('mongoose')

exports.createTransaction = async (req, res) => {
    const { customerId, laptopId, quantity } = req.body;

    try {
        const customer = await Customer.findById(customerId);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        
        const laptop = await Laptop.findById(laptopId);
        if (!laptop)return res.status(404).json({ message: 'Laptop not found' });
        
        const inventory = await Inventory.findOne({ laptop_id: laptopId });

        if (!inventory || inventory.stock_quantity < quantity) {
            return res.status(400).json({ message: 'Not enough stock available' });
        }

        const totalPrice = laptop.Price.Current * quantity;

        const transaction = new Transaction({
            customer_id: customerId,
            laptops: [
                { laptop_id: laptopId, quantity, total_price: totalPrice}],
            total_amount: totalPrice,
            payment_status: true,
            total_price: totalPrice,
            transaction_date: new Date(),
        });

        await transaction.save();

        customer.purchase_history.push(transaction._id);
        await customer.save();

        inventory.stock_quantity -= quantity;
        await inventory.save();

        res.status(200).json({ message: 'Transaction created successfully', transaction });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Server error' });
    }
};
