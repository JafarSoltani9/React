const Order = require('../models/order')

async function createOrder (req, res) {
    const {items } = req.body 

    const newOrder = new Order( {items})

    await newOrder.save()

    res.save('order added')
}

exports.createOrder = createOrder 