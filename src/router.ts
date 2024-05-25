import { Router } from "express";
import { newsController } from "./controllers/news.controllers";

const router: Router = Router();


router.get("/news", newsController.index);


export default router;