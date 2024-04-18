import { createBrowserRouter } from "react-router-dom";
// import AllNew from "@components/AllNew";
// import Detail from "@components/Detail";
import HomePage from "@components/HomePage";
import MainPage from "@components/MainPage";
import NotFound from "@components/NotFound";
import Navbar from "@components/Navbar";
import AllNew from "@components/AllNew";
import DetailNew from "@components/DetailNew";

const Routers = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/detailnew/:id/:newId",
    element: <DetailNew />,
  },
  {
    path: "/allnew",
    element: <AllNew />,
  },
  {
    path: "/allnew/:id",
    element: <AllNew />,
  }


  // {
  //   path: "/allnew",
  //   element: <Navbar />,
  //   children: [
  //     {
  //       path: "allnew/:id/:name",
  //       element:<AllNew />,
  //     },
  //   ],
  // },
]);

export default Routers;
