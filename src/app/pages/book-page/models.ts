export interface IBookPage {
  authorName?: string;
  bookName?: string;
  price?: number;
  rating?: number;
  imageUrl?: string;
  info?: string;
}

export interface IComment {
  points: number;
  text: string;
}
