import { Router } from "express";
import { newsController } from "./controllers";

const router: Router = Router();

// router.get("/news", newsController.index);
router.get("/api/news/headline", newsController.headline);
router.get("/api/news/secondary", newsController.secondary);
router.get("/api/news/:id", newsController.show);

export default router;