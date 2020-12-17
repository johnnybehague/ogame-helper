import IBatimentProduction from "./../../interfaces/IBatimentProduction";
import Batiment from "./../Batiment";

export default class SynthetiseurDeuterium extends Batiment
  implements IBatimentProduction {
  getConsommation(niveau: number, temperatureMax: number) {
    return (
      10 * niveau * Math.pow(1.1, niveau) * (1.28 - 0.002 * temperatureMax)
    );
  }

  getProduction(niveau: number) {
    return 20 * niveau * Math.pow(1.1, niveau);
  }
}
