export interface IUserState {
  email: string;
  name: string;
  id: string;
  token: string;
}

export interface IBook {
  name: string;
  info: string;
  price: number;
  number: number;
  link: string;
}

export interface IBasketState {
  books: { [key: string]: IBook };
}
