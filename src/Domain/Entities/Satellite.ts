import { ISatellite } from "../Interfaces/ISatellite";
import { PositionCoordinates } from "../Types/PositionCoordinates";

export class Satellite implements ISatellite {
  private _name: string;
  private _distance: number;
  private _message: string[];
  private _position?: PositionCoordinates;

  constructor(name: string, distance: number, message: string[]) {
    this._name = name;
    this._distance = distance;
    this._message = message;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get distance(): number {
    return this._distance;
  }

  set distance(value: number) {
    this._distance = value;
  }

  get message(): string[] {
    return this._message;
  }

  set message(value: string[]) {
    this._message = value;
  }

  get position(): PositionCoordinates {
    return this._position;
  }

  set position(value: PositionCoordinates) {
    this._position = value;
  }
}
