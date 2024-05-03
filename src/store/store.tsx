import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterSlice from "./slice/counterSlice";
import regisSlice from "./slice/regisSlice";
import pokemonService from "../services/PokemonService/pokemonService";
export const store = configureStore({
  reducer: {
    //------------------------------------comment=p'gy work
    // counter: counterSlice,
    // regis: regisSlice,
    [pokemonService.reducerPath]: pokemonService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonService.middleware),
});

setupListeners(store.dispatch);
// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
