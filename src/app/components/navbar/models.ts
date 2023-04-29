export interface IBooksList {
  showScroll: boolean;
}

export interface IUser {
  name: string;
  email: string;
}

export interface IShowComponentProps {
  show: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAccountComponentProps {
  user: IUser;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
