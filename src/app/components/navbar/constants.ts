import { IBookItemProps } from "../book-item-short-info/models";
import { IUser } from "./models";

export const navigationTitles = ["CATALOG", "ABOUT US", "CONTACTS"];

export const books: Array<IBookItemProps> = [
  {
    picture:
      "https://bookchef.ua/upload/iblock/94f/94f629cedebd39d22275d972803efb75.png",
    name: "Name",
    info: "Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book.",
    price: 100,
    number: 1,
  },
  {
    picture:
      "https://bookchef.ua/upload/iblock/94f/94f629cedebd39d22275d972803efb75.png",
    name: "Name",
    info: "Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book.",
    price: 100,
    number: 2,
  },
  {
    picture:
      "https://bookchef.ua/upload/iblock/94f/94f629cedebd39d22275d972803efb75.png",
    name: "Name",
    info: "Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book.",
    price: 100,
    number: 3,
  },
  {
    picture:
      "https://bookchef.ua/upload/iblock/94f/94f629cedebd39d22275d972803efb75.png",
    name: "Name",
    info: "Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book.",
    price: 100,
    number: 1,
  },
];

export const maxBooksCountWithoutScroll = 3;

export const user: IUser = { name: "Tom", email: "tom@gmail.com" };
