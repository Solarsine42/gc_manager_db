const express = require("express");
const router = express.Router();
const Teetime = require("../models/Teetime");

// router.get("/tee_times/", tee_times_controllers.getAllTimes);
// router.get("/tee_times/:id", tee_times_controllers.getOneTime);
// router.post("/tee_times/", tee_times_controllers.addOneTime);
// router.patch("/tee_times/:id", tee_times_controllers.updateOneTime);
// router.delete("/tee_times/:id", tee_times_controllers.removeOneTime);
// router.post("/tee_times/makeTT", tee_times_controllers.makeTT);
// router.delete("/tee_times/deleteTT/:id", tee_times_controllers.deleteTT);

/* GET home page. */
router.get("/", function(req, res, next) {
  Teetime.query()
    .eager("customers")
    .then(result => res.send(result));
});

router.get("/:id", function(req, res, next) {
  Teetime.query()
    .findById(req.params.id)
    .eager("customers")
    .then(result => res.send(result));
});

router.post("/", function(req, res) {
  Teetime.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.patch("/:id", function(req, res) {
  Teetime.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedTeetime => res.json(updatedTeetime));
});

router.delete("/:id", function(req, res) {
  Teetime.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedTeetime => res.json(deletedTeetime));
});

module.exports = router;
