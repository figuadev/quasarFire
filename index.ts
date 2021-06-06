import morgan from "morgan";
import helmet from "helmet";

import express, { NextFunction, Request, Response } from "express";
import StatusCodes from "http-status-codes";
import "express-async-errors";

import logger from "./shared/Logger";
import router from "./routes";

const app = express();
const { BAD_REQUEST } = StatusCodes;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

// Routes
app.use("/", router);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  //TODO: Fix this
  console.log(req, res, next);

  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

// Start the server
const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});
