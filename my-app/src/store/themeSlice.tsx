import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../src/app/createAppSlice"

export type ThemeSliceState = {
  theme: string
}

const initialState: ThemeSliceState = {
  theme: "white",
}

export const themeSlice = createAppSlice({
  name: "theme",
  initialState,
  reducers: create => ({
    toggleTheme: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.theme = action.payload
      },
    ),
  }),
  selectors: {
    selectTheme: theme => theme.theme,
  },
})

export const { toggleTheme } = themeSlice.actions
export const { selectTheme } = themeSlice.selectors