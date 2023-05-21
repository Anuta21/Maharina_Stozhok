import axios, { AxiosRequestConfig, ResponseType } from "axios";

export const axiosInstance = axios.create();

export class RequestBuilder {
  private requestOptions: AxiosRequestConfig = {};
  private body: unknown;

  constructor() {
    this.setDefaultOptions();
  }

  public setHeaders(headers?: { [key: string]: string }) {
    this.requestOptions.headers = {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json, text/plain, */*",
      ...this.requestOptions.headers,
      ...headers,
    };
    return this;
  }

  public setResponseType(type: ResponseType = "json") {
    this.requestOptions.responseType = type;
    return this;
  }

  private setDefaultOptions() {
    this.setHeaders();
    this.setResponseType();
    return this;
  }

  public setBody(body: unknown) {
    this.body = body;
    return this;
  }

  public setParams<T>(params?: T) {
    this.requestOptions.params = params;
    return this;
  }

  async get<T>(path: string) {
    return await axiosInstance.get<T>(path, this.requestOptions);
  }

  async post<T>(path: string) {
    return await axiosInstance.post<T>(path, this.body, this.requestOptions);
  }

  async patch<T>(path: string) {
    return await axiosInstance.patch<T>(path, this.body, this.requestOptions);
  }

  async put<T>(path: string) {
    return await axiosInstance.put<T>(path, this.body, this.requestOptions);
  }
}
