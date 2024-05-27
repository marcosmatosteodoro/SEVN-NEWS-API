import { Request, Response } from "express";
import rawData from "../data/data.json";
import { News } from "../domain";
import { newsController } from "./";

const mockResponse = () => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res as Response;
};

describe("NewsController", () => {
  let req: Partial<Request>;
  let res: Response;
  let originalData: News[];

  beforeEach(() => {
    req = {};
    res = mockResponse();
    originalData = [...rawData]; // Backup original data
  });

  afterEach(() => {
    // Restore the original data
    rawData.length = 0;
    rawData.push(...originalData);
  });

  describe("index", () => {
    it("should return all news", () => {
      newsController.index(req as Request, res);
      expect(res.json).toHaveBeenCalledWith(rawData);
    });
  });

  describe("show", () => {
    it("should return a news item by id", () => {
      const id = "some-valid-id";
      req.params = { id };
      const record = rawData.find((news: News) => news.id === id);

      newsController.show(req as Request, res);

      if (record) {
        expect(res.json).toHaveBeenCalledWith(record);
      } else {
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith("Record not found");
      }
    });

    it("should return 404 if news item not found", () => {
      req.params = { id: "non-existent-id" };

      newsController.show(req as Request, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith("Record not found");
    });
  });

  describe("headline", () => {
    it("should return all headline news", () => {
      const expectedRecords = rawData
        .filter((record: News) => record.headline)
        .map(({ headline, content, first_sentence, created_at, author, ...rest }) => rest);

      newsController.headline(req as Request, res);

      expect(res.json).toHaveBeenCalledWith(expectedRecords);
    });

  });

  describe("secondary", () => {
    it("should return all secondary news", () => {
      const expectedRecords = rawData
        .filter((record: News) => !record.headline)
        .map(({ image, headline, created_at, author, ...rest }) => rest);

      newsController.secondary(req as Request, res);

      expect(res.json).toHaveBeenCalledWith(expectedRecords);
    });

  });
});
