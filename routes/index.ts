import { Router } from "express";
import { TopSecretController } from "../app/http/controllers/TopSecretController";
import logger from "../shared/Logger";
import PromiseB from "bluebird";

const controller: TopSecretController = new TopSecretController({
  logger: logger,
});

const router = Router();
router.post("/topsecret", async (_req, res) => {
  PromiseB.try(() => {
    res.send(controller.setMessageAll({ satellites: [] }));
  }).catch(() => {
    return res
      .status(404)
      .json("No se pudo determinar la posición y/o el mensaje");
  });
});
router.post("/topsecret_split/:satellite_name", async (_req, res) => {
  PromiseB.try(() => {
    res.send(controller.setMessage({ position: 0, message: "" }));
  }).catch(() => {
    return res.status(500).json("No hay suficiente informacion");
  });
});

router.get("/topsecret_split", async (_req, res) => {
  PromiseB.try(() => {
    res.send(controller.getTopSecretMessage());
  }).catch(() => {
    return res.status(500).json("No hay suficiente informacion");
  });
});

router.all("/*", (_req, res, _next) => {
  logger.err("Method Not Allowed");
  res.sendStatus(405);
});

export default router;
