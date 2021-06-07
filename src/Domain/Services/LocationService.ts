import { ILocationService } from "../Interfaces/ILocationService";
import { PositionCoordinates } from "../Types/PositionCoordinates";
import PromiseB from "bluebird";
import { RebelSatellite } from "../Entities/RebelSatellite";

export class LocationService implements ILocationService {
  getSecretLocation(
    satellites: RebelSatellite[]
  ): PromiseB<PositionCoordinates> {
    return PromiseB.try(() => {
      return this.extractDistances(satellites);
    }).then((distances: number[]) => {
      return this.getLocation(distances);
    });
  }

  getLocation(_distances: number[]): PromiseB<PositionCoordinates> {
    //TODO: Implement trilateration in this method
    return PromiseB.try(() => {
      return {
        x: 0,
        y: 0,
      };
    });
  }

  private extractDistances(_satellites: RebelSatellite[]): PromiseB<number[]> {
    //TODO: Implement
    return PromiseB.try(() => {
      return [0, 0, 0];
    });
  }
}
