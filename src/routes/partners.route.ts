import { Router } from "express";
import { middleware } from "../middlewares/validationMiddleware";
import { getPartners } from "../controllers/partnersController";
import { getPartnersSchema } from "../validations/partners.validator";

var router = Router();

router.post("/GetPartners", middleware(getPartnersSchema), getPartners);

export = router;
