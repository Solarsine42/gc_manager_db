exports.up = function(knex, Promise) {
  return knex.schema.createTable("tee_times", function(table) {
    table.increments();
    table.string("time").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("tee_times");
};
