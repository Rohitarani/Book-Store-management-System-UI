import { Category } from "./Category";

  export class Book{
    bookId:number;
    title:string;
    author:string;
    description:string;
    isbnNumber:string;
    publishDate:Date;
    lastUpdateTime:Date;
    categoryId:number;
    price:number;
    bookCategory:Category;
  }