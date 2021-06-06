import { Router } from "express";
import { TopSecretController } from "../app/http/controllers/TopSecretController";
import logger from "../shared/Logger";
import { CheckInputSetMessageAllMw } from "../app/http/middleware/CheckInputSetMessageAllMw";
import { CheckInputSetMessageMw } from "../app/http/middleware/CheckInputSetMessageMw";

const controller: TopSecretController = new TopSecretController({
  logger: logger,
});

const router = Router();
router.post(
  "/topsecret",
  new CheckInputSetMessageAllMw().handle,
  controller.setMessageAll
);

router.post(
  "/topsecret_split/:satellite_name",
  new CheckInputSetMessageMw().handle,
  controller.setMessage
);

router.get("/topsecret_split", controller.getTopSecretMessage);

router.all("/*", (_req, res, _next) => {
  logger.err("Method Not Allowed");
  res.sendStatus(405);
});

export default router;
