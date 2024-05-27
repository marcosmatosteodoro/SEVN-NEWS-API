import { Request, Response } from "express";
import { notFound } from "./";

const mockResponse = () => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res as Response;
};

describe("NotFound", () => {
  let req: Partial<Request>;
  let res: Response;

  beforeEach(() => {
    req = {};
    res = mockResponse();
  });

  it("should return 404 with 'Route Not Found' message", () => {
    notFound.index(req as Request, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Route Not Found' });
  });
});
