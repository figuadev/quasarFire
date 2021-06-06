import { Router } from "express";
import { TopSecretController } from "../app/http/controllers/TopSecretController";
import logger from "../shared/Logger";

const controller: TopSecretController = new TopSecretController({
  logger: logger,
});

const router = Router();
router.post("/topsecret", controller.setMessageAll({ satellites: [] }));
router.post(
  "/topsecret_split/:satellite_name",
  controller.setMessage({ position: 0, message: "" })
);
router.get("/topsecret_split", controller.getTopSecretMessage());

export default router;
