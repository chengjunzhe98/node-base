const express = require("express")
const path = require("path")
const { formidable } = require("formidable")
const router = express.Router()

const checkLoginMiddleware = require("../middlewares/checkLoginMiddleware")

router.get("/", checkLoginMiddleware, function (req, res, next) {
	res.render("upload")
})

router.post("/", function (req, res, next) {
	const form = formidable({
		multiples: true,
		uploadDir: path.resolve(__dirname, "../public/uploadFiles"),
		keepExtensions: true
	})

	form.parse(req, (err, fields, files) => {
		if (err) {
			next(err)
			return
		}
		console.log(fields, files)
		const url = "/uploadFiles/" + files.file[0].newFilename
		res.send("ok" + url)
	})
})

module.exports = router
