"use strict";
var express_1 = require("express");
var validationMiddleware_1 = require("../middlewares/validationMiddleware");
var partnersController_1 = require("../controllers/partnersController");
var partners_validator_1 = require("../validations/partners.validator");
var router = (0, express_1.Router)();
router.post("/GetPartners", (0, validationMiddleware_1.middleware)(partners_validator_1.getPartnersSchema), partnersController_1.getPartners);
module.exports = router;
