const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	ustid: {
		type: [Number, String],
		required: true
	},
	gender: {
		type: Number,
		required: true
	}
})

const usersModel = mongoose.model("users", userSchema)

module.exports = usersModel
