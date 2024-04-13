import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../review';

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {
  private baseUrl = 'http://localhost:8080/api/add-review';
  constructor(private http: HttpClient) { }

  // Method to add a review for a specific book
  addReview(review: Review): Observable<Review> {
    const url = `${this.baseUrl}`;
    return this.http.post<Review>(url, review);
  }
}
