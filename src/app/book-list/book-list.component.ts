import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  book: Book = { title: "", author: "", published: 0 };

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addBook(): void {
    this.books.push(this.book);
    this.book = { title: "", author: "", published: 0 };
  }

  deleteBook(book: Book): void {
    const index = this.books.findIndex(b => b === book);
    this.books.splice(index, 1);
  }

}
