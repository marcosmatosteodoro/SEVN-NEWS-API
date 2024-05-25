import { Request, Response } from "express";

class NotFound {
  public index (req: Request, res: Response) {
    res.status(404).json({
      message: 'Not Found'
    });
  }
}

export const notFound = new NotFound();
