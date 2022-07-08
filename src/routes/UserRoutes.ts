import { Router } from "express";
import * as taskControllers from "../controller/TaskControllers";

const router = Router();

router.get("/", taskControllers.renderHomePage);

export default router;
