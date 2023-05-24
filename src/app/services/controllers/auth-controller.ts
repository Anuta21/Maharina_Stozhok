import { RequestBuilder } from "../../common/request-builder";
import {
  ILoginRequestBody,
  ILoginAndSighUpResponceBody,
  ISighUpRequestBody,
} from "./models";

export class AuthController {
  private searchUrl = "http://localhost:8080/auth";

  login(body: ILoginRequestBody) {
    const path = `${this.searchUrl}/login`;
    return new RequestBuilder()
      .setBody(body)
      .post<ILoginAndSighUpResponceBody>(path);
  }

  sighUp(body: ISighUpRequestBody) {
    const path = `${this.searchUrl}/register`;
    return new RequestBuilder()
      .setBody(body)
      .post<ILoginAndSighUpResponceBody>(path);
  }
}
