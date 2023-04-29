export interface IBooksList {
  showScroll: boolean;
}

export interface IBasketComponentProps {
  show: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}
