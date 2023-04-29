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
