import { Request, Response } from "express";
import rawData from "../data/data.json";
import { News, NewsHeadline, NewsSecondary } from "../domain";

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
    const id = req.params.id;
    const record = this.data.find((record: News) => record.id === id);

    if (record) {
      res.json(record as News);
    } else {
      res.status(404).send("Record not found");
    }
  }

  public headline (req: Request, res: Response) {
    const records = this.data
      .filter((record: News) => record.headline)
      .map(({ headline, content, first_sentence, ...rest }) => rest);

    if (records) {
      res.json(records as NewsHeadline[]);
    } else {
      res.status(404).json({ message: 'Headline news not found' });
    }
  }

  public secondary (req: Request, res: Response) {
    const records = this.data
      .filter((record: News) => !record.headline)
      .map(({ image, headline, ...rest }) => rest);

    if (records) {
      res.json(records as NewsSecondary[]);
    } else {
      res.status(404).json({ message: 'Secondary news not found' });
    }
  }
}

export const newsController = new NewsController();
