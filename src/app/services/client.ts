import { AuthController, BooksController } from "./controllers";

export class Client {
  public readonly books: BooksController;
  public readonly auth: AuthController;

  constructor() {
    this.books = new BooksController();
    this.auth = new AuthController();
  }
}
