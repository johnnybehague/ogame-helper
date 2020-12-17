import UniteDefense from "./UniteDefense";

export default class LaserLeger extends UniteDefense {
  constructor() {
    super(
      "LASER_LEGER",
      "Artillerie laser légère",
      "",
      1500,
      500,
      0,
      2000,
      25,
      100
    );
  }

  /*
Feu rapide :
Destructeur 10
Bombardier 20
EDM 200

Prerequis
Energie 1
ChantierSpatial 2
Laser 3
  */
}
