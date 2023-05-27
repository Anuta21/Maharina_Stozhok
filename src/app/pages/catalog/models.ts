import React from "react";
import { IBook } from "../../services";

export interface IBookData {
  image: string;
  name: string;
  price: number;
  handleCardClick: () => void;
}

export interface IButtonProps {
  isDark: boolean;
}

export interface IFilterItemsShow {
  sort: boolean;
  author: boolean;
  genre: boolean;
}

export interface IFilterPriceProps {
  from: string;
  to: string;
}

export interface IFilterOptions {
  sort: string;
  author: Array<string>;
  genre: Array<string>;
  price: { [key: string]: number };
}

export interface IFilterProps {
  isMobile?: boolean;
  books: Array<IBook>;
  setBooks: React.Dispatch<React.SetStateAction<Array<IBook>>>;
  setFilteredBooks: React.Dispatch<React.SetStateAction<Array<IBook>>>;
  filterOptions: IFilterOptions;
  setFilterOptions: React.Dispatch<React.SetStateAction<IFilterOptions>>;
}

export interface IMobileProps {
  isMobile?: boolean;
}
