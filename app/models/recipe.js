var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
	name: String,
	ingredients: [
		{
			name: String,
			quantity: String
		}],
	directions: [
		{
			number: Number,
			direction: String
		}
	]
});
module.exports = mongoose.model('Recipe', recipeSchema);
