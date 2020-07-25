import { Component, OnInit } from '@angular/core';
import { Book } from '../Model/Book';
import { BookStoreService } from '../book-store.service';
import { Category } from '../Model/Category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  category :Category=new Category();
  message:String;

  constructor(private bookStoreService : BookStoreService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.category.categoryId= parseInt(params.get('categoryId'));
    })
  }

  updateCategory(category: Category){
    this.bookStoreService.updateCategory(category).subscribe(
        data=>{
          this.message=data;
        },
        error => {
          console.log(this.message);
        }
    );
  }
  }



