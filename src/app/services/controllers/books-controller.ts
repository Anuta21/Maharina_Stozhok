import { RequestBuilder } from "../../common/request-builder";
import { IBook } from "./models";

export class BooksController {
  private searchUrl = `http://localhost:8080/books`;

  getBooks() {
    return new RequestBuilder().get<Array<IBook>>(this.searchUrl);
  }
}
