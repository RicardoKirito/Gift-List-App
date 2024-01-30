import { Router } from "express";
import { authRequired } from "../middleware/validate_token.js"
import { AddGift, deleteGift, deselectGift, getGift, getGiftAll, selectGift, updateGift } from "../controller/gift.controller.js";

const router = Router();

router.get("/gift", getGiftAll);
router.get("/gift/:id", getGift);
router.post("/gift", AddGift);
router.put("/gift", authRequired, updateGift);
router.delete("/gift/:id", deleteGift);
router.post("/gift-select/:id", selectGift);
router.post("/gift-deselect/:id", deselectGift);

export default router;