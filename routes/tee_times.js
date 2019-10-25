const express = require("express");
const router = express.Router();
const tee_times_controllers = require("../controllers/tee_times");

router.get("/", tee_times_controllers.getAllTimes);
router.get("/:id", tee_times_controllers.getOneTime);
router.post("/", tee_times_controllers.addOneTime);
router.patch("/:id", tee_times_controllers.updateOneTime);
router.delete("/:id", tee_times_controllers.removeOneTime);
router.post("/makeTT", tee_times_controllers.makeTT);

module.exports = router;
