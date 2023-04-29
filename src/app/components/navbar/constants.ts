import { IBook, IUser } from "./models";

export const navigationTitles = ["CATALOG", "ABOUT US", "CONTACTS"];

export const books: Array<IBook> = [
  {
    picture:
      "https://bookchef.ua/upload/iblock/94f/94f629cedebd39d22275d972803efb75.png",
    author: "Author Name",
    info: "Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book.",
    price: 100,
  },
  {
    picture:
      "https://bookchef.ua/upload/iblock/94f/94f629cedebd39d22275d972803efb75.png",
    author: "Author Name",
    info: "Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book.",
    price: 100,
  },
  {
    picture:
      "https://bookchef.ua/upload/iblock/94f/94f629cedebd39d22275d972803efb75.png",
    author: "Author Name",
    info: "Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book.",
    price: 100,
  },
  {
    picture:
      "https://bookchef.ua/upload/iblock/94f/94f629cedebd39d22275d972803efb75.png",
    author: "Author Name",
    info: "Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book. Some info about book.",
    price: 100,
  },
];

export const maxBooksCountWithoutScroll = 3;

export const user: IUser = { name: "Tom", email: "tom@gmail.com" };
