import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  bookId;
  message;
  errorMessage;

  showError:boolean;
  showMessage:boolean;
  constructor(private bookStoreService: BookStoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.bookId= params.get('bookId');
      this.bookStoreService.deleteBook(this.bookId).subscribe(
      data=>{this.message=data, this.showMessage=true},
      error=>{this.errorMessage=error.error.message, this.showError=true},
      )
    })

  }

}