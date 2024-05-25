import { Request, Response } from "express";
import rawData from "../data/data.json";
import { News } from "../domain";

class NewsController {
  private data: News[];

  constructor() {
    this.data = rawData as News[];
    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
    this.headline = this.headline.bind(this);
    this.secondary = this.secondary.bind(this);
  }


  public index (req: Request, res: Response) {
    res.json(
      this.data
    );
  }

  public show (req: Request, res: Response) {
    res.json(
      this.data
    );
  }
  public headline (req: Request, res: Response) {
    res.json(
      this.data
    );
  }
  public secondary (req: Request, res: Response) {
    res.json(
      this.data
    );
  }
}

export const newsController = new NewsController();
