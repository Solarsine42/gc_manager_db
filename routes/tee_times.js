const express = require("express");
const router = express.Router();
const tee_times_controllers = require("../controllers/tee_times");

router.get("/tee_times/", tee_times_controllers.getAllTimes);
router.get("/tee_times/:id", tee_times_controllers.getOneTime);
router.post("/tee_times/", tee_times_controllers.addOneTime);
router.patch("/tee_times/:id", tee_times_controllers.updateOneTime);
router.delete("/tee_times/:id", tee_times_controllers.removeOneTime);
router.post("/tee_times/makeTT", tee_times_controllers.makeTT);
router.delete("/tee_times/deleteTT/:id", tee_times_controllers.deleteTT);

module.exports = router;
