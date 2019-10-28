exports.up = function(knex, Promise) {
  return knex.schema.createTable("cust_tee_times", function(table) {
    table.increments();
    table
      .integer("customer_id")
      .references("id")
      .inTable("customers")
      .notNullable();
    table
      .integer("tee_time_id")
      .references("id")
      .inTable("tee_times")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cust_tee_times");
};
