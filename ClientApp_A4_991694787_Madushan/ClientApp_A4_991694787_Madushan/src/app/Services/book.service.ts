import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/api/books';
  }

  // Method to fetch all books
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }
}
