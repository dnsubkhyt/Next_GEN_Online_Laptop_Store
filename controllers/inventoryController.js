const Inventory = require('../models/inventoryModel')

exports.checkInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findOne({ laptop_id: req.params.laptopId });
        if (!inventory) {
            return res.status(404).json({ message: 'Inventory not found' });
        }
        res.status(200).json(inventory);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateInventory = async (req, res) => {
    const { laptopId, quantity } = req.body;

    try {
        const inventory = await Inventory.findOne({ laptop_id: laptopId });
        if (!inventory) {
            return res.status(404).json({ message: 'Inventory not found' });
        }

        if (inventory.stock_quantity < quantity) {
            return res.status(400).json({ message: 'Not enough stock available' });
        }

        inventory.stock_quantity -= quantity;
        await inventory.save();

        res.status(200).json({ message: 'Inventory updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
