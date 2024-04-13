import { Component } from '@angular/core';
import { Review } from '../review';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  reviewerName: string = '';
  rating: number = 0;
  comment: string = '';
  productId: number = 0;
  reviewAddedSuccessfully: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.productId = idParam ? parseInt(idParam, 10) : 0;
    });
  }

  addReview(): void {
    const review: Review = new Review(
      this.productId,
      0,
      this.reviewerName,
      this.rating,
      this.comment
    );

    console.log('Review being sent:', review);

    this.httpClient.post<any>('http://localhost:8080/api/add-review', review)
      .subscribe(response => {
        console.log('Response from server:', response);
        this.navigateToReviews(this.productId.toString());
        this.reviewAddedSuccessfully = true;
      }, error => {
        console.error('Error when adding review:', error);
      });
  }

  navigateToReviews(productId: string): void {
    this.router.navigate(['/reviews', productId]);
  }
}
