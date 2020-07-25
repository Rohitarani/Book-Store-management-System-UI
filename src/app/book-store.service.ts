import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Model/Category';
import { BookStoreConstantsService } from './book-store-constants.service';
import { Book } from './Model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http : HttpClient) { }

  public createCategory ( category : Category ) :Observable<any>{
    return this.http.post(BookStoreConstantsService.base_url+BookStoreConstantsService.create_category, category, {responseType:'text'});
  }
  public createBook ( book : Book ) :Observable<any>{
    return this.http.post(BookStoreConstantsService.base_url+BookStoreConstantsService.create_book, book, {responseType:'text'});
  }
  public displayAllCategory(){
    return this.http.get(BookStoreConstantsService.base_url+BookStoreConstantsService.display_category);
  }

  public deleteCategory(categoryId){ 
    return this.http.delete(BookStoreConstantsService.base_url+BookStoreConstantsService.delete_category+'/'+categoryId, {responseType:'text'});
  }

  public updateCategory(category : Category){
    return this.http.put(BookStoreConstantsService.base_url+ BookStoreConstantsService.update_category, category, {responseType:'text'});
  }

  public updateBook(book : Book){
    return this.http.put(BookStoreConstantsService.base_url+BookStoreConstantsService.update_book, book, {responseType:'text'} );
  }

  public displayAllBooks(){
    return this.http.get(BookStoreConstantsService.base_url+BookStoreConstantsService.display_book);
  }

  

  public deleteBook(bookId){
    return this.http.delete(BookStoreConstantsService.base_url+BookStoreConstantsService.delete_book+"/"+bookId,{responseType:'text'} );
  }
}
