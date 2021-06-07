import { RebelSatellite } from "./RebelSatellite";
import { IRebelAlliance } from "../Interfaces/IRebelAlliance";
import PromiseB from "bluebird";
import { MessageService } from "../Services/MessageService";
import { PositionCoordinates } from "../Types/PositionCoordinates";
import { LocationService } from "../Services/LocationService";

export class RebelAlliance implements IRebelAlliance {
  private _satellites: RebelSatellite[];

  constructor(satellites: RebelSatellite[]) {
    this._satellites = satellites;
  }

  get satellites(): RebelSatellite[] {
    return this._satellites;
  }

  set satellites(value: RebelSatellite[]) {
    this._satellites = value;
  }

  getSecretMessage(): PromiseB<string> {
    return new MessageService().getSecretMessage(this._satellites);
  }

  getSecretLocation(): PromiseB<PositionCoordinates> {
    return new LocationService().getSecretLocation(this._satellites);
  }
}
