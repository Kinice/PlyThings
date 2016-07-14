module.exports = function(app){
	app.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
  });
	app.get('/test', function(req, res) {
		res.send('get');
	});
	app.post('/', function (req, res) {
	  console.log(req.body.name);
	  res.send('POST request to the homepage');
	});
};
