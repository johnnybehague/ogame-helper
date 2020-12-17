import IBatimentConsommation from "./../../interfaces/IBatimentConsommation";
import Batiment from "./../Batiment";

export default class CentraleFusion extends Batiment
  implements IBatimentConsommation {
  getConsommation(niveau: number) {
    return 20 * niveau * Math.pow(1.1, niveau);
  }

  getProduction(niveau: number, niveauEnergie: number) {
    return 10 * niveau * Math.pow(1.05 + 0.01 * niveauEnergie, niveau);
  }
}
