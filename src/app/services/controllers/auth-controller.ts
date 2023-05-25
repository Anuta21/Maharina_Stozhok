import { RequestBuilder } from "../../common/request-builder";
import {
  ILoginRequestBody,
  ILoginAndSighUpResponseBody,
  ISighUpRequestBody,
} from "./models";

export class AuthController {
  private searchUrl = "http://localhost:8080/auth";

  login(body: ILoginRequestBody) {
    const path = `${this.searchUrl}/login`;
    return new RequestBuilder()
      .setBody(body)
      .post<ILoginAndSighUpResponseBody>(path);
  }

  sighUp(body: ISighUpRequestBody) {
    const path = `${this.searchUrl}/register`;
    return new RequestBuilder()
      .setBody(body)
      .post<ILoginAndSighUpResponseBody>(path);
  }
}
