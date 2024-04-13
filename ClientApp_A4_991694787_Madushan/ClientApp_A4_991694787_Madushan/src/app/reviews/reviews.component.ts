import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../review';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  bookId: string | null = null;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');

    if (this.bookId) {
      this.fetchReviewsByBookId(this.bookId);
    }
  }

  fetchReviewsByBookId(bookId: string): void {
    const url = `http://localhost:8080/api/books/${bookId}/reviews`;

    this.httpClient.get<Review[]>(url).subscribe(
      (reviews) => {
        this.reviews = reviews;
      },
      (error) => {
        console.error('Failed to fetch reviews:', error);
      }
    );
  }

  navigateToAddReview(): void {
    if (this.bookId) {
      this.router.navigate(['/add-review', this.bookId]);
    }
  }
}
