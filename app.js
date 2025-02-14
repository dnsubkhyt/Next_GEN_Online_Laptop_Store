const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('./config/mongoose')
const customer = require('./routes/customerRoutes')
const laptop = require('./routes/laptopRoutes')
const inventory  = require('./routes/inventoryRoutes')
const transaction = require('./routes/transactionRoutes')


app.use(express.json())

app.use('/NextGenLaptops/customer', customer)
app.use('/NextGenLaptops/laptop', laptop)
app.use('/NextGenLaptops/inventory', inventory)
app.use('/NextGenLaptops/transaction', transaction)


app.get('/', (req, res) => {
    res.send('Successfully connected')
})

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})
