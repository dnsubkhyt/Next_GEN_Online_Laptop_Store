const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Customer = require('../models/customerModel')


exports.signup = async (req, res) => {
    const {name, email, password, address} = req.body
    try{

        const userExists = await Customer.findOne({email})
        if (userExists) return res.status(400).json({message: 'User already exists.'})

        const hashPassword = await bcrypt.hash(password, 10);
        
        const newCustomer = new Customer({
            name,
            email,
            password: hashPassword,
            address,
            purchase_history: []
        })
        
        await newCustomer.save()
        
        res.status(200).json({message: 'Customer successfully registered'})

    }   
    catch (err){
        console.error(err)
        res.status(500).json({error: 'Server error'})
    }

}


exports.login = async (req, res) => {
    const {email, password} = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide both email and password' });
    }

    try {

        const customer = await Customer.findOne({email})
        if (!customer) return res.status(400).json({message: 'User not found.'})

        const isMatch = await bcrypt.compare(password, customer.password)
        if (!isMatch) return res.status(400).json({message: 'Invalid Credentials'})
            
        const token = jwt.sign({customer_id: customer._id}, process.env.JWT_SECRET, 
            {expiresIn: '1h'
        })
        
        res.json({token})

        }
    catch (err){
        console.error(err)

        res.status(500).json({error: 'Server error'})
    }
}

exports.getCustomerData = async (req, res) => {
    try {
        const customerId = req.customerId;

        const customer = await Customer.findById(customerId).populate('purchase_history');

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.status(200).json({
            name: customer.name,
            email: customer.email,
            address: customer.address,
            purchase_history: customer.purchase_history,
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
