const mongoose = require('mongoose')

const FamilySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  age: Number,
  gender: String,
})

const FamilyModel = mongoose.model('families', FamilySchema)

module.exports = FamilyModel
