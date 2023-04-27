import { IBookData } from "./models";

export const booksData: Array<IBookData> = Array(65).fill({
  image:
    "https://bookchef.ua/upload/iblock/94f/94f629cedebd39d22275d972803efb75.png",
  name: "Bookname",
  price: 100,
} as IBookData);
