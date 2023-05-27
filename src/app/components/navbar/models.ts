export interface IBooksList {
  showScroll: boolean;
}

export interface IShowComponentProps {
  show: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAccountComponentProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IBurgerProps {
  navBarClick: (item: string) => void;
  accountClick: () => void;
  basketClick: () => void;
}

export interface IExitButtonProps {
  show: boolean;
}

export interface INavBar {
  showBasketWhenAddBook?: boolean;
}
