import { createBrowserRouter } from "react-router-dom";

import HomePage from "@components/HomePage";
import MainPage from "@components/MainPage";
import NotFound from "@components/NotFound";
import AllNew from "@components/AllNew";
import DetailNew from "@components/DetailNew";
import Css from "@uicourse/Modulecss";
import LayoutFlex from "@uicourse/LayoutFlex";

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
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/layoutflex",
    element: <LayoutFlex />,
  }

]);

export default Routers;
