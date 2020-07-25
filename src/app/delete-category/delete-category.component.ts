import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(private bookStoreService : BookStoreService, private route : ActivatedRoute) { }

  categoryId;
  message;
  errorMessage;

  showError:boolean;
  showMessage:boolean;

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.categoryId= params.get('categoryId');
      this.bookStoreService.deleteCategory(this.categoryId).subscribe(
      data=>{this.message=data, this.showMessage=true},
      error=>{this.errorMessage=error.error.message, this.showError=true},
      )
    })

    console.log(this.message);
  }

}
