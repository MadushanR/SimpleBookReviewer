export class Book {
  id: number;
  title: string;
  authorName: string;
  price: number;

  constructor(id: number, title: string, authorName: string, price: number) {
    this.id = id;
    this.title = title;
    this.authorName = authorName;
    this.price = price;
  }
}
