import UniteDefense from "./UniteDefense";

export default class MissileInterplanetaire extends UniteDefense {
  constructor() {
    super(
      "MISSILE_INTERPLANETAIRE",
      "Missile Interplanétaire",
      "",
      12000,
      2500,
      10000,
      15000,
      1,
      18000
    );
  }

  /*
Prerequis
ChantierSpatial 1
SiloMissiles 2
  */
}
