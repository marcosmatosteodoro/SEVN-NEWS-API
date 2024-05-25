import { Request, Response } from "express";
import rawData from "../data/data.json";
import { News } from "../domain";

class NewsController {
  private data: News[];

  constructor() {
    this.data = rawData as News[];
    this.index = this.index.bind(this);
  }


  public index (req: Request, res: Response) {
    res.json(
      this.data
    );
  }
}

export const newsController = new NewsController();
