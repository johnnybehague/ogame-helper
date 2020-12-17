export default class UniteDefense {
  id: string;
  nom: string;
  imgUrl: string;
  coutMetal: number;
  coutCristal: number;
  coutDeuterium: number;
  pointsStructure: number;
  puissanceBouclier: number;
  valeurAttaque: number;

  constructor(
    id: string,
    nom: string,
    imgUrl: string,
    coutMetal: number,
    coutCristal: number,
    coutDeuterium: number,
    pointsStructure: number,
    puissanceBouclier: number,
    valeurAttaque: number
  ) {
    this.id = id;
    this.nom = nom;
    this.imgUrl = imgUrl;
    this.coutMetal = coutMetal;
    this.coutCristal = coutCristal;
    this.coutDeuterium = coutDeuterium;
    this.pointsStructure = pointsStructure;
    this.puissanceBouclier = puissanceBouclier;
    this.valeurAttaque = valeurAttaque;
  }
}
