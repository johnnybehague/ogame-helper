import UniteDefense from "./UniteDefense";

export default class MissileInterception extends UniteDefense {
  constructor() {
    super(
      "MISSILE_INTERCEPTION",
      "Missile Interception",
      "",
      8000,
      0,
      2000,
      8000,
      1,
      1
    );
  }

  /*
Prerequis
ChantierSpatial 1
SiloMissiles 2
  */
}
