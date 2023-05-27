import { RequestBuilder } from "../../common/request-builder";
import { IOrder, IOrderResponse } from "./models";

export class OrdersController {
  private searchUrl = `http://localhost:8080/order`;

  putOrder(order: IOrder, token: string) {
    return new RequestBuilder()
      .setHeaders({
        Authorization: `Bearer ${token}`,
      })
      .setBody(order)
      .post<IOrderResponse>(this.searchUrl);
  }
}
