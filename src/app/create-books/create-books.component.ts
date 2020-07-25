import { Component, OnInit } from '@angular/core';
import { Book } from '../Model/Book';
import { BookStoreService } from '../book-store.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {
  constructor(private bookStoreService : BookStoreService) { }
  book :Book=new Book();
  message:String;
errorMessage;
category: any;

showError: boolean;
showData:boolean;


  
  showMessage:boolean= true;

  ngOnInit() {
    this.bookStoreService.displayAllCategory().subscribe(
      data=>{this.category=data, this.showData=true}
    )
    console.log(this.category);
    }

  createBook(form :NgForm){
    this.bookStoreService.createBook(this.book).subscribe(
      data=>{this.message=data, this.showMessage=true},
      error=>{this.errorMessage=error.error.message, this.showError=true}
    );
    form.reset();
  }

  

}

