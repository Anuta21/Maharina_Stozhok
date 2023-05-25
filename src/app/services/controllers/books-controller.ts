import { RequestBuilder } from "../../common/request-builder";
import { IBook, IFeedback } from "./models";

export class BooksController {
  private searchUrl = `http://localhost:8080/books`;

  getBooks() {
    return new RequestBuilder().get<Array<IBook>>(this.searchUrl);
  }

  getBook(id: string) {
    return new RequestBuilder().get<IBook>(`${this.searchUrl}/${id}`);
  }

  putFeedback(feedBack: IFeedback, id: string, token: string) {
    return new RequestBuilder()
      .setHeaders({
        Authorization: `Bearer ${token}`,
      })
      .setBody(feedBack)
      .patch<any>(`${this.searchUrl}/${id}`);
  }
}
