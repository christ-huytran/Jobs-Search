module.exports = (function() {
	return {
		checkSession: function(req, res) {
			res.send({
				isAuthenticated: req.isAuthenticated(),
				user: req.user
			})
		}
	}
})()