exports.up = function(knex, Promise) {
  return knex.schema.createTable("customers", function(table) {
    table.increments();
    table.string("name").notNullable();
    table.string("company").notNullable();
    table.string("email").notNullable();
    table.string("phone").notNullable();
    table.string("address").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("posts");
};
