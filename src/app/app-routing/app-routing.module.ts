import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { DisplayCategoryComponent } from '../display-category/display-category.component';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { UpdateBooksComponent } from '../update-books/update-books.component';
import { DisplayBooksComponent } from '../display-books/display-books.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { CreateBooksComponent } from '../create-books/create-books.component';

const appRoutes:Routes=[
  {path:'displayCategory',component: DisplayCategoryComponent},
  {path:'createCategory', component:CreateCategoryComponent},
  {path:"deleteCategory/:categoryId", component: DeleteCategoryComponent},
  {path:"updateCategory/:categoryId", component: UpdateCategoryComponent},
  {path:"updateBook/:bookId", component: UpdateBooksComponent},
  {path:"displayBooks", component:DisplayBooksComponent},
  {path:"deleteBook/:bookId", component:DeleteBookComponent},
  {path:'createBook', component: CreateBooksComponent}
 
  ]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
