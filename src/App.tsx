// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Routers from "@function/Router";
// import { PokemonService } from './services/PokemonService'
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
function App() {
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
}

export default App;
