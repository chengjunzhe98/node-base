const JWT = require("jsonwebtoken")

module.exports = (req, res, next) => {
	const token = req.get("token")
	if (!token) {
		return res.json({
			code: "2001",
			msg: "身份验证失败(缺少token)",
			data: null
		})
	}
	JWT.varify(token, "chengjunzhe", (err, data) => {
		if (err) {
			return res.json({
				code: "1001",
				msg: "身份验证失败(token错误)",
				data: null
			})
		}
		req.user = data
		next()
	})
}
