var express = require("express");
var router = express.Router();
const verifyToken = require("../middlewares/auth.js");
// Require controller modules.
var symptom_controller = require("../controllers/SymptomController");

router.get("/api/symptoms", symptom_controller.get_all_symptoms);
router.get("/api/symptoms/:id",  symptom_controller.get_symptom_by_id);

router.post("/api/symptoms",  symptom_controller.post_symptom);
router.patch("/api/symptoms",  symptom_controller.update_symptom);
router.delete("/api/symptoms",  symptom_controller.delete_symptom);

module.exports = router;
