exports.up = function(knex, Promise) {
	return knex.schema.createTable("recipe", function(recipe) {
		recipe.increments();
		recipe.string("name", 51).notNullable();
		recipe.integer("calories", 6).notNullable();
		recipe.integer("servings", 3).notNullable();
		recipe
			.integer("user_id")
			.unsigned()
			.references("id")
			.inTable("users")
			.onDelete("cascade");
		recipe.string("ingredients_id");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("recipe");
};
