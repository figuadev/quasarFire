import { PositionCoordinates } from "../Types/PositionCoordinates";
import PromiseB from "bluebird";
import { RebelSatellite } from "../Entities/RebelSatellite";

export interface ILocationService {
  getLocation(distances: number[]): PromiseB<PositionCoordinates>;
  getSecretLocation(
    satellites: RebelSatellite[]
  ): PromiseB<PositionCoordinates>;
}
