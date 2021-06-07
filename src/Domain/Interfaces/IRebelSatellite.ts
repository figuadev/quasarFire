import { PositionCoordinates } from "../Types/PositionCoordinates";

export interface IRebelSatellite {
  name: string;
  distance: number;
  message: string[];
  position?: PositionCoordinates;
}
