import PromiseB from "bluebird";
import Logger from "jet-logger";
import { Request, Response } from "express";

export class TopSecretController {
  private logger: Logger;

  constructor(args: { logger: Logger }) {
    this.logger = args.logger;
  }

  setMessageAll(_req: Request, res: Response): any {
    return PromiseB.try(() => {
      this.logger.imp("[setMessageAll]", true);
      res.send(true);
    }).catch(() => {
      res.status(404).json("No se pudo determinar la posición y/o el mensaje");
    });
  }

  setMessage(_req: Request, res: Response): any {
    return PromiseB.try(() => {
      this.logger.imp("[setMessage]", true);
      res.send(true);
    }).catch(() => {
      return res.status(500).json("No hay suficiente informacion");
    });
  }

  getTopSecretMessage(_req: Request, res: Response): any {
    return PromiseB.try(() => {
      this.logger.imp("[getTopSecretMessage]", true);
      res.send(true);
    }).catch(() => {
      return res.status(500).json("No hay suficiente informacion");
    });
  }
}
