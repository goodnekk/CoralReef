define(['marked', 'fs'], function(marked, fs) {
	function index(req, res) {
		fs.readFile('documents/index.md', 'utf8', function(err, data) {
			if (err) {
				res.send('what???', 404);
			} else {
				res.render('index', {page: marked(data)});
			}
		});
	}

	return({
		index: index
	});
});