const express = require("express")
const router = express.Router()
const { log } = require("console")

const usersModel = require("../../db/modals/usersModal")

router.post("/addUser", function (req, res, next) {
	const { name, ustid, gender } = req.body
	usersModel
		.create({
			name,
			ustid: ustid,
			gender
		})
		.then(
			(data) => {
				log("插入成功", data)

				res.json({
					code: "0000",
					msg: "操作成功",
					data: data
				})
			},
			(err) => {
				res.json({
					code: "5000",
					msg: "操作失败",
					data: err
				})
			}
		)
})

module.exports = router
