const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// router.get("/customers/", customers_controllers.getAllCustomers);
// router.get("/customers/:id", customers_controllers.getOneCustomer);
// router.post("/customers/", customers_controllers.addOneCustomer);
// router.patch("/customers/:id", customers_controllers.updateOneCustomer);
// router.delete("/customers/:id", customers_controllers.removeOneCustomer);

/* GET home page. */
router.get("/", function(req, res, next) {
  Customer.query()
    .eager("teetimes")
    .then(result => res.send(result));
});

router.get("/:id", function(req, res, next) {
  Customer.query()
    .findById(req.params.id)
    .eager("teetimes")
    .then(result => res.send(result));
});

router.post("/", function(req, res) {
  Customer.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.patch("/:id", function(req, res) {
  Customer.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedCustomer => res.json(updatedCustomer));
});

router.delete("/:id", function(req, res) {
  Customer.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedCustomer => res.json(deletedCustomer));
});

module.exports = router;
