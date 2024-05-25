import cors from 'cors';
import express, { Request, Response } from "express";
import router from "./router";
class App {
  public server: express.Application

  constructor() {
    this.server = express()
    this.middleware()
    this.router()
    this.notFoundHandler();
  }

  private middleware(){
    this.server.use(express.json());
    this.server.use(cors());
  }

  private router(){
    this.server.use(router)
  }

  private notFoundHandler() {
    this.server.use((req: Request, res: Response) => {
      res.status(404).json({ message: 'Not Found' });
    });
  }
}

export default App;