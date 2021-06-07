import PromiseB from "bluebird";
import { RebelSatellite } from "../Entities/RebelSatellite";

export interface IMessageService {
  getMessage(messages: string[][]): PromiseB<string>;
  getSecretMessage(satellites: RebelSatellite[]): PromiseB<string>;
}
