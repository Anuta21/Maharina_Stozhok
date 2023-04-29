import { IBookData } from "./models";

export const booksData: Array<IBookData> = Array(65).fill({
  image:
    "https://bookchef.ua/upload/iblock/94f/94f629cedebd39d22275d972803efb75.png",
  name: "Bookname",
  price: 100,
} as IBookData);

export const sortItems = [
  "From high price to low",
  "From low price to high",
  "From high popularity to low",
  "From low popularity to high",
];

export const genres = [
  "Fantasy",
  "Sci-Fi",
  "Mystery",
  "Thriller",
  "Romance",
  "Westerns",
  "Dystopian",
  "Contemporary",
];

export const authors = Array(8).fill("Author");
