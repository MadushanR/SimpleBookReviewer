import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {

    this.fetchBooks();
  }

  fetchBooks(): void {
    const apiUrl = 'http://localhost:8080/api/books';

    this.httpClient.get<Book[]>(apiUrl).subscribe(
      (books) => {
        this.books = books;
      },
      (error) => {
        console.error('Failed to fetch books:', error);
      }
    );
  }

  handleBookSelection(book: Book): void {
    this.router.navigate(['/reviews', book.id]);
  }
}
