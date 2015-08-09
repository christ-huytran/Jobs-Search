var request = require('request');
module.exports = (function() {
	return {
		search: function(req, res) {
			var results = [];
			var term = req.body.term;
			var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20craigslist.search" +
"%20where%20location%3D%22seattle%22%20and%20type%3D%22jjj%22%20and%20query%3D%22" + term + "%22&format=" +
"json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

			request(url, function (error, response, body) {
				body = JSON.parse(body);
				if (body.query.results.RDF.item == null) {
					result = 'Nothing Found';
					res.send(result);
				} else {
					items = body.query.results.RDF.item;
					for (var i = 0; i < items.length; i++) {
						results.push({
							title: items[i].title[0],
							about: items[i]['about'],
							description: items[i]['description']
						})
					}
					res.send(results);
				}
			})
		}
	}
})()




