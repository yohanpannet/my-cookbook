// Recipe api routes =========================================
var Recipe = require('./models/recipe');

module.exports = function(app){
	// API ---------------------------------------------------

	app.get('/api/recipes', function(req, res){
		Recipe.find(function(err, recipes){
			if (err){
				res.send(err);
			} else {
				res.json(recipes);
			}
		});
	});

	app.get('/api/recipe/:recipe_id', function(req, res){
		Recipe.findOne({_id:req.params.recipe_id}, function(err, recipe){
			if (err){
				res.send(err);
			} else {
				res.json(recipe);
			}
		});
	});

	app.post('/api/recipes', function(req, res){
		//TO DO: Gerer la creation
	});

	app.delete('/api/recipes/:recipe_id', function(req, res){
		Recipe.remove({
			_id: req.params.recipe_id
		}, function(err, recipe){
			if (err){
				res.send(err);
			} else {
				Recipe.find(function(err, recipes){
					if (err){
						res.send(err);
					} else {
						res.json(recipes);
					}
				});
			}

		});
	});

	// application ---------------------------------------
	app.get('*', function(req, res){
		res.sendfile('./public/views/index.html');
	});
}
