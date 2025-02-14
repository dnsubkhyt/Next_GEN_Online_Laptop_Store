const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventoryController')

router.get('/:laptopId', inventoryController.checkInventory);

router.put('/update', inventoryController.updateInventory);

module.exports = router;