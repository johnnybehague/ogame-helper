import Batiment from "./../Batiment";

export default class CentraleSolaire extends Batiment {
  getProduction(temperatureMax: number) {
    return temperatureMax / 4 + 20;
  }
}
