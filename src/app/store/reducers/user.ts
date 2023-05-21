import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./models";

const initialState = {} as IUserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserState>) {
      state = action.payload;
    },
  },
});
