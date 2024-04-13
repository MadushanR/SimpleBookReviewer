export class Review {
  bookId: number;
  id: number;
  reviewerName: string;
  rating: number;
  comment: string;

  constructor(bookId:number, id: number, reviewerName: string, rating: number, comment: string) {
    this.id = id;
    this.bookId = bookId;
    this.reviewerName = reviewerName;
    this.rating = rating;
    this.comment = comment;
}

}
