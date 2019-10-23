const express = require("express");
const router = express.Router();
const cust_tee_times_controllers = require("../controllers/cust_tee_times");

router.get("/", cust_tee_times_controllers.getAllCustTeeTimes);
router.get("/:id", cust_tee_times_controllers.getOneCustTeeTimes);
router.post("/", cust_tee_times_controllers.addOneCustTeeTimes);
router.patch("/:id", cust_tee_times_controllers.updateOneCustTeeTimes);
router.delete("/:id", cust_tee_times_controllers.removeOneCustTeeTimes);

module.exports = router;
