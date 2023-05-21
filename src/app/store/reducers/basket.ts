import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketState, IBook } from "./models";

const initialState = { books: {} } as IBasketState;

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addNewBook(state, action: PayloadAction<{ [key: string]: IBook }>) {
      state.books = { ...state.books, ...action.payload };
    },
    addChosenBook(state, action: PayloadAction<string>) {
      state.books[action.payload].number += 1;
    },
    deleteBook(state, action: PayloadAction<string>) {
      if (state.books[action.payload].number > 1) {
        state.books[action.payload].number -= 1;
      } else {
        const { [action.payload]: _, ...tempBooks } = state.books;
        state.books = tempBooks;
      }
    },
  },
});
