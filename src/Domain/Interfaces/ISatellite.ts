import { PositionCoordinates } from "../Types/PositionCoordinates";

export interface ISatellite {
  name: string;
  distance: number;
  message: string[];
  position?: PositionCoordinates;
}
