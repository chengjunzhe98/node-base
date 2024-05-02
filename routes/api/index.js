const express = require("express")
const router = express.Router()
const md5 = require("md5")
const JWT = require("jsonwebtoken")

/* GET home page. */
router.get("/homeInfo", function (req, res, next) {
	res.json({
		name: md5(123)
	})
})

router.get("/homeInfoTestToken", function (req, res, next) {
	const token = JWT.sign({ name: 123, id: 1234125 }, "chengjunzhe", { expiresIn: 60 * 60 * 1 })
	res.json({
		code: "0000",
		msg: "操作成功",
		data: token
	})
})

module.exports = router
