import { ICargoShip } from "../Interfaces/ICargoShip";
import { PositionCoordinates } from "../Types/PositionCoordinates";

export class CargoShip implements ICargoShip {
  private _fullMessage: string[];
  private _position: PositionCoordinates;

  constructor(fullMessage: string[], position: PositionCoordinates) {
    this._fullMessage = fullMessage;
    this._position = position;
  }

  get fullMessage(): string[] {
    return this._fullMessage;
  }

  set fullMessage(value: string[]) {
    this._fullMessage = value;
  }

  get position(): PositionCoordinates {
    return this._position;
  }

  set position(value: PositionCoordinates) {
    this._position = value;
  }
}
