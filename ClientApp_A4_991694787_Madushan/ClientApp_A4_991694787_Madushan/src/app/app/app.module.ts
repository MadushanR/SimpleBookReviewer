import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { BooksComponent } from '../books/books.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ReviewsComponent } from '../reviews/reviews.component';
import { AddReviewComponent } from '../add-review/add-review.component';

@NgModule({
  declarations: [],
  imports: [
    RouterOutlet, BooksComponent, ReviewsComponent, HttpClientModule, CommonModule , FormsModule,AddReviewComponent],
  providers: [],
  bootstrap: []
})
export class AppModule { }
