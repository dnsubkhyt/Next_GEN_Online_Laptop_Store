const Laptop = require('../models/laptopModel');
const Inventory = require('../models/inventoryModel')

exports.getAllLaptops = async (req, res) => {
    try {
        const laptops = await Laptop.find();
        res.status(200).json(laptops);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getLaptopById = async (req, res) => {
    try {
        const laptop = await Laptop.findById(req.params.id);
        if (!laptop) {
            return res.status(404).json({ message: 'Laptop not found' });
        }
        res.status(200).json(laptop);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.addLaptop = async (req, res) => {
    try {
        const { Title, Brand, Price, Specifications } = req.body;

        const newLaptop = new Laptop({
            Title,
            Brand,
            Price,
            Specifications,
        });

        await newLaptop.save();

        const newInventory = new Inventory({
            laptop_id: newLaptop._id, 
            stock_quantity: 20 
        });

        await newInventory.save();

        res.status(200).json({
            message: 'Laptop and Inventory created successfully!',
            laptop: newLaptop,
            inventory: newInventory,
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
