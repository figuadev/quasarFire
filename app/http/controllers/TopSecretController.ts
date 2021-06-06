import PromiseB from "bluebird";
import Logger from "jet-logger";

export class TopSecretController {
  private logger: Logger;

  constructor(args: { logger: Logger }) {
    this.logger = args.logger;
  }

  setMessageAll(args: { satellites: any }): any {
    PromiseB.try(() => {
      //TODO: Remove this
      console.log(args);
      this.logger.imp("[setMessageAll]", true);
    });
  }

  setMessage(args: { position: number; message: string }): any {
    PromiseB.try(() => {
      //TODO: Remove this
      console.log(args);
      this.logger.imp("[setMessage]", true);
    });
  }

  getTopSecretMessage(): any {
    PromiseB.try(() => {
      this.logger.imp("[getTopSecretMessage]", true);
    });
  }
}
