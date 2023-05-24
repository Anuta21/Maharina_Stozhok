interface IFeedback {
  _id: string;
  feedbackText: string;
  estimate: number;
}
export interface IBook {
  _id: string;
  title: string;
  price: number;
  author: string;
  genre: string;
  info: string;
  imageUrl: string;
  feedbacks: Array<IFeedback>;
}
