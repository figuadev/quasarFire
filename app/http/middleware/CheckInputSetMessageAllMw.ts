import { Request, Response, NextFunction } from "express";

export class CheckInputSetMessageAllMw {
  constructor() {}

  handle(_req: Request, _res: Response, next: NextFunction) {
    //TODO: Add logic validation here
    next();
  }
}
