import IBatimentProduction from "./../../interfaces/IBatimentProduction";
import Batiment from "./../Batiment";

export default class CentraleSolaire extends Batiment
  implements IBatimentProduction {
  getProduction(niveau: number) {
    return 20 * niveau * Math.pow(1.1, niveau);
  }
}
