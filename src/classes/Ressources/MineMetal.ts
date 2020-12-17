import IBatimentConsommation from "./../../interfaces/IBatimentConsommation";
import IBatimentProduction from "./../../interfaces/IBatimentProduction";
import Batiment from "./../Batiment";

export default class MineMetal extends Batiment
  implements IBatimentConsommation, IBatimentProduction {
  getConsommation(niveau: number) {
    return 30 * niveau * Math.pow(1.1, niveau);
  }

  getProduction(niveau: number) {
    return 10 * niveau * Math.pow(1.1, niveau);
  }
}
