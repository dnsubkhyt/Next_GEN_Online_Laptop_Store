const mongoose = require('mongoose')

const laptopSchema = new mongoose.Schema({
    Title: {type: String, required: true},
    Brand: {type:String, required: true},
    Price: {Current: {type: Number, required: true},
            Currency: {type: String, required: true},
            Original: {type: Number, requried: true}
           },
    Specifications: {
            "Standing screen display size": { type: String },
            "Screen Resolution": { type: String },
            "Max Screen Resolution": { type: String },
            "Processor": { type: String },
            "RAM": { type: String },
            "Hard Drive": { type: String },
            "Graphics Coprocessor": { type: String },
            "Chipset Brand": { type: String },
            "Card Description": { type: String },
            "Wireless Type": { type: String },
            "Number of USB 2.0 Ports": { type: String },
            "Number of USB 3.0 Ports": { type: String },
            "Average Battery Life (in hours)": { type: String },
            "Brand": { type: String },
            "Series": { type: String },
            "Item model number": { type: String },
            "Hardware Platform": { type: String },
            "Operating System": { type: String },
            "Item Weight": { type: String },
            "Product Dimensions": { type: String },
            "Item Dimensions LxWxH": { type: String },
            "Color": { type: String },
            "Processor Brand": { type: String },
            "Number of Processors": { type: String },
            "Computer Memory Type": { type: String },
            "Hard Drive Interface": { type: String },
            "Optical Drive Type": { type: String },
            "Voltage": { type: String },
            "Batteries": { type: String },
            "ASIN": { type: String },
            "Customer Reviews": { type: String },
            "Best Sellers Rank": { type: String },
            "Date First Available": { type: String }
    }

})

const laptopModel = mongoose.model('laptop', laptopSchema)
module.exports  = laptopModel