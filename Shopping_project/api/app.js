const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const orderRoute = require('./router/order-route')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', orderRoute)

mongoose.connect('mongodb://127.0.0.1:27017/orders').then(() => {
    app.listen(3000)
}).catch((err) => {
    console.log(err)
})