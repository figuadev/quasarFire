import morgan from "morgan";
import helmet from "helmet";
import express, { Request, Response, NextFunction, Express } from "express";
import logger from "./src/Infrastructure/Logger/Logger";
import router from "./routes";
import createHttpError from "http-errors";
import StatusCodes from "http-status-codes";
import dotEnv, { DotenvConfigOutput } from "dotenv";
const { BAD_REQUEST } = StatusCodes;

//TODO: Abstract Settings management/validation to builder interface
//Load Environment Config
const config: DotenvConfigOutput = dotEnv.config();
if (config.error !== undefined) {
  console.error(config.error);
  process.exit(1);
}

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (process.env.ENVIRONMENT === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.ENVIRONMENT === "production") {
  app.use(helmet());
}

// Routes
app.use("/", router);

//Mw Handle Register Route Not Found
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(createHttpError(BAD_REQUEST));
});

//Mw App Error Handler
app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  logger.err(error);
  res.status(error.status ?? 500).json(error);
});

// Start server
const port: number = Number(process.env.PORT || 3000);

app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});
