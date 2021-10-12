import { Injectable } from '@angular/core';
import { Book } from './interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  books: Book[] = [
    { title: "Warren Peas", author: "Tiia", published: 2021 },
    { title: "Anna Karenina", author: "Kansa", published: 2020 }
  ];

  getBooks(): Book[]{
    return this.books;
  }
}
