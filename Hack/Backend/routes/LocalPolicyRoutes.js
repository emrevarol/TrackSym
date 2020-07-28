var express = require("express");
var router = express.Router();
var localPoliciesController = require("./../controllers/LocalPoliciesController");

router.get("/api/local_policy", localPoliciesController.get_local_policies);
router.get("/api/local_policy/:id", localPoliciesController.get_one_local_policy);
router.post("/api/local_policy", localPoliciesController.post_local_policy);
router.patch("/api/local_policy", localPoliciesController.update_local_policy);
router.delete("/api/local_policy", localPoliciesController.delete_local_policy);

module.exports = router;