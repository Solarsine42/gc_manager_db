const knex = require("../db/knex");

exports.getAllCustTeeTimes = function(req, res) {
  knex("cust_tee_times")
    .join("customers", "customers_id", "customer.id")
    .join("tee_times", "tee_times.id", "tee_time_id")
    // .select(customers.id, customer_id)
    .table("cust_tee_times")
    .then(custTeeTime => res.json(custTeeTime));
};

exports.getOneCustTeeTime = function(req, res) {
  knex("cust_tee_times")
    .join("customers", "customers.id", "=", "customer_id")
    .join("tee_times", "tee_times.id", "=", "tee_time_id")
    .select(customers.id, customer_id, tee_times.id, tee_times_id)
    .table("cust_tee_times")
    .where("id", req.params.id)
    .then(custTeeTime => res.json(custTeeTime));
};

exports.addOneCustTeeTime = function(req, res) {
  knex("cust_tee_times")
    .insert(req.body)
    .returning("*")
    .then(newCustTeeTime => res.json(newCustTeeTime));
};

exports.updateOneCustTeeTime = function(req, res) {
  knex("cust_tee_times")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedCustTeeTime => res.json(updatedCustTeeTime));
};

exports.removeOneCustTeeTime = function(req, res) {
  knex("cust_tee_times")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newCustTeeTime => res.json(newCustTeeTime));
};
