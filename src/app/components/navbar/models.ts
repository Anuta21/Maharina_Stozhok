export interface IBooksList {
  showScroll: boolean;
}

export interface IBook {
  picture: string;
  author: string;
  info: string;
  price: number;
}

export interface IBasketComponentProps {
  show: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}
