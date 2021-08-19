
exports.up = function(knex) {
    return knex.schema.createTable('productos', (table) => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('price').notNullable();
        table.string('thumbnail').notNullable();
        table.timestamps('true', 'true')
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('productos');
};
