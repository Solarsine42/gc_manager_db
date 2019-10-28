const knex = require("../db/knex");

exports.getAllCustomers = function(req, res) {
  knex
    .select()
    .table("customers")
    .then(customers => res.json(customers));
};

exports.getOneCustomer = function(req, res) {
  knex
    .select()
    .table("customers")
    .where("id", req.params.id)
    .then(customer => res.json(customer));
};

exports.addOneCustomer = function(req, res) {
  knex("customers")
    .insert(req.body)
    .returning("*")
    .then(newCustomer => res.json(newCustomer));
};

exports.updateOneCustomer = function(req, res) {
  knex("customers")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedCustomer => res.json(updatedCustomer));
};

exports.removeOneCustomer = function(req, res) {
  knex("customers")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newCustomer => res.json(newCustomer));
};

function authenticate(email, password) {
  if (email === "blah" && password === "blah") {
    return true;
  } else {
    return false;
  }
}
