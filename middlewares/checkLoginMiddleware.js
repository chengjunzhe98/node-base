module.exports = (req, res, next) => {
	if (!req.query.id) {
		res.redirect("/")
	}
	next()
}
