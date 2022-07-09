import { Router } from "express";
import * as taskControllers from "../controller/TaskControllers";

const router = Router();

router.post("/addTask", taskControllers.addTask);
router.get("/checkTask/:id", taskControllers.checkTask);

export default router;
