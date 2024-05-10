
import "./App.css";
import Routers from "@function/Router";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
}

export default App;
