import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {title: "", author: "", published: 0};
  @Output() deleted = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteBook(): void {
    this.deleted.emit(this.book);
  }

}
