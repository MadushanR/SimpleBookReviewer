import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddReviewComponent } from './add-review/add-review.component';
export const routes: Routes = [
    { path: 'books', component: BooksComponent },
    { path: 'reviews/:id', component: ReviewsComponent },
    { path: 'add-review/:id', component: AddReviewComponent },
  ];