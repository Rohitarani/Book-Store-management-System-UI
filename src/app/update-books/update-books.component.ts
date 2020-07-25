import { Component, OnInit } from '@angular/core';
import { Book } from '../Model/Book';
import { BookStoreService } from '../book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {

  book :Book=new Book();
  message:String;

  constructor(private bookStoreService: BookStoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.book.bookId= parseInt(params.get('bookId'));
    })
  }

  updateBook(book:Book){
    this.book.bookCategory=null;
    this.bookStoreService.updateBook(book).subscribe(
        data=>{
          this.message=data;
          alert(this.message);          
        },
        error => {
          console.log(this.message);
        }
    );
  }
}
