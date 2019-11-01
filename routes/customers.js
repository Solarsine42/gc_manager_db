const express = require("express");
const router = express.Router();
const customers_controllers = require("../controllers/customers");

router.get("/customers/", customers_controllers.getAllCustomers);
router.get("/customers/:id", customers_controllers.getOneCustomer);
router.post("/customers/", customers_controllers.addOneCustomer);
router.patch("/customers/:id", customers_controllers.updateOneCustomer);
router.delete("/customers/:id", customers_controllers.removeOneCustomer);

module.exports = router;
