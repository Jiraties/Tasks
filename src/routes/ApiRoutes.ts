import { Router } from "express";
import * as taskControllers from "../controller/TaskControllers";

const router = Router();

router.post("/addTask", taskControllers.addTask);

export default router;
