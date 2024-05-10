// reducers.js
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type theme = {
  theme: "light" | "dark";
};

function getPreferredColorScheme():"dark" |"light" {
 const storedTheme = localStorage.getItem("theme")
 if(storedTheme === "dark" || storedTheme === "light"){
  return storedTheme
 }
 return "light" ;
}

const initialState:theme = {
  theme: getPreferredColorScheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"dark" | "light">) => {
        state.theme = action.payload;
     
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
