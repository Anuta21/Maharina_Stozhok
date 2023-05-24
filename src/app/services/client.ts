import { BooksController } from "./controllers";

export class Client {
  public readonly books: BooksController;

  constructor() {
    this.books = new BooksController();
  }
}
