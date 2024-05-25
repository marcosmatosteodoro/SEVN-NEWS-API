import { Router } from "express";
import { newsController } from "./controllers/news.controllers";

const router: Router = Router();

// router.get("/news", newsController.index);
router.get("/news/headline", newsController.headline);
router.get("/news/secondary", newsController.secondary);
router.get("/news/:id", newsController.show);

export default router;