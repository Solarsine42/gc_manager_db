const express = require("express");
const router = express.Router();
const customers_controllers = require("../controllers/customers");

router.get("/", customers_controllers.getAllCustomers);
router.get("/:id", customers_controllers.getOneCustomer);
router.post("/", customers_controllers.addOneCustomer);
router.patch("/:id", customers_controllers.updateOneCustomer);
router.delete("/:id", customers_controllers.removeOneCustomer);

module.exports = router;
