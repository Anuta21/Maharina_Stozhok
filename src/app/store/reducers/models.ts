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
}

export interface IBasketState {
  books: { [key: string]: IBook };
}
