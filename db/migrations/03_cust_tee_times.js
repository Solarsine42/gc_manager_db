exports.up = function(knex, Promise) {
  return knex.schema.createTable("cust_tee_times", function(table) {
    table.increments();
    table.integer("customer_id").notNullable();
    table.integer("tee_time_id").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("posts");
};
