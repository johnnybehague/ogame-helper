export default class TileClass {
  id: number;
  imgUrl: string;
  title: string;
  author: string;

  constructor(id: number, imgUrl: string, title: string, author: string) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.title = title;
    this.author = author;
  }
}
