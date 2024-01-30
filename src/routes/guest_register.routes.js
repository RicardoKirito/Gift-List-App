import { Router } from "express";
import { register } from "../controller/guest_register.controller.js";


const router = Router();

router.post('/register', register)

export default router;