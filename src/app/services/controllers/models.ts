export interface IFeedback {
  _id?: string;
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

export interface ILoginRequestBody {
  email: string;
  password: string;
}

export interface ILoginAndSighUpResponseBody {
  _id: string;
  name: string;
  email: string;
  __v: number;
  token: string;
}

export interface ISighUpRequestBody {
  name: string;
  email: string;
  password: string;
}
