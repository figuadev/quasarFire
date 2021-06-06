import { PositionCoordinates } from "../../Domain/Types/PositionCoordinates";

export type ResponseSecretMessageDTO = {
  position: PositionCoordinates;
  message: string;
};
