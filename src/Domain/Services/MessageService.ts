import { IMessageService } from "../Interfaces/IMessageService";
import PromiseB from "bluebird";
import { RebelSatellite } from "../Entities/RebelSatellite";

export class MessageService implements IMessageService {
  getSecretMessage(satellites: RebelSatellite[]): PromiseB<string> {
    return PromiseB.try(() => {
      return this.extractMessages(satellites);
    }).then((messages: string[][]) => {
      return this.getMessage(messages);
    });
  }

  //Nota: Tambien es posible hacerlo con librerias de NodeJS como "lodash" o "underscore"
  getMessage(messages: string[][]): PromiseB<string> {
    return PromiseB.try(() => {
      if (messages[0] === undefined) {
        throw new Error(
          "Deben existir mensajes para poder obtener la frase secreta."
        );
      }

      let secretMessage: string[] = [];

      for (let i = 0; i < messages[0].length; i++) {
        for (let j = 0; j < messages.length; j++) {
          const message: string[] = messages[j] as unknown as string[];
          const word: string = message[i] as unknown as string;

          if (word) {
            secretMessage.push(word);
            break;
          }
        }

        if (secretMessage.length < 2) {
          throw new Error(
            "La cantidad de palabras descifradas no son suficientes para obtener el mensaje secreto."
          );
        }
      }

      return secretMessage.join(" ").trim();
    });
  }

  private extractMessages(_satellites: RebelSatellite[]): PromiseB<string[][]> {
    //TODO: Implement
    throw new Error("Method not implemented.");
  }
}
