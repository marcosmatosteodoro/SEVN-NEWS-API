import cors from 'cors';
import express from "express";
import { notFound } from './controllers/notFound.controllers';
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
    this.server.use('/assets', express.static("./public/assets"));
    this.server.use(router)
  }

  private notFoundHandler() {
    this.server.use(notFound.index);
  }
}

export default App;