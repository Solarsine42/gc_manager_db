const knex = require("../db/knex");

exports.getAllTimes = function(req, res) {
  knex("tee_times")
    .select()
    .table("tee_times")
    .then(times => res.json(times));
};

exports.getOneTime = function(req, res) {
  knex("tee_times")
    .select()
    .table("tee_times")
    .where("id", req.params.id)
    .then(time => res.json(time));
};

exports.addOneTime = function(req, res) {
  knex("tee_times")
    .insert(req.body)
    .returning("*")
    .then(newTime => res.json(newTime));
};

exports.updateOneTime = function(req, res) {
  knex("tee_times")
    .update({ ...req.body })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedTime => res.json(updatedTime));
};

exports.removeOneTime = function(req, res) {
  knex("tee_times")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newTime => res.json(newTime));
};

exports.makeTT = function(req, res) {
  knex("cust_tee_times")
    .insert(req.body)
    .returning("*")
    .then(newTT => res.json(newTT));
};

exports.deleteTT = function(req, res) {
  knex("cust_tee_times")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newTT => res.json(newTT));
};
