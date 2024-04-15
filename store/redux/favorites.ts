import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type FavoriteState = {
  ids: string[];
  sort: boolean;
};

const initialState: FavoriteState = {
  ids: [],
  sort: false
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.favoriteMeals

export default favoritesSlice.reducer;
