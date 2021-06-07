import { RebelSatellite } from "../Entities/RebelSatellite";
import PromiseB from "bluebird";
import { PositionCoordinates } from "../Types/PositionCoordinates";

export interface IRebelAlliance {
  satellites: RebelSatellite[];

  getSecretMessage(): PromiseB<string>;
  getSecretLocation(): PromiseB<PositionCoordinates>;
}
