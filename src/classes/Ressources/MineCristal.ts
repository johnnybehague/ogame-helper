import IBatimentConsommation from "./../../interfaces/IBatimentConsommation";
import IBatimentProduction from "./../../interfaces/IBatimentProduction";
import Batiment from "./../Batiment";

export default class MineCristal extends Batiment
  implements IBatimentConsommation, IBatimentProduction {
  getConsommation(niveau: number) {
    return 20 * niveau * Math.pow(1.1, niveau);
  }

  getProduction(niveau: number) {
    return 10 * niveau * Math.pow(1.1, niveau);
  }
}
