import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./models";

const initialState = { id: "", name: "", email: "", token: "" } as IUserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserState>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
  },
});
