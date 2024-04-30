const mongoose = require('mongoose')

const FoodsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  color: String,
})

const FoodsModel = mongoose.model('foods', FoodsSchema)

module.exports = FoodsModel
