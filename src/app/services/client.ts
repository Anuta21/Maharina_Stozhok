import {
  AuthController,
  BooksController,
  OrdersController,
} from "./controllers";

export class Client {
  public readonly books: BooksController;
  public readonly auth: AuthController;
  public readonly orders: OrdersController;

  constructor() {
    this.books = new BooksController();
    this.auth = new AuthController();
    this.orders = new OrdersController();
  }
}
