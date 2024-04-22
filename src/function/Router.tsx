import { createBrowserRouter } from "react-router-dom";

import HomePage from "@components/HomePage";
import MainPage from "@components/MainPage";
import NotFound from "@components/NotFound";
import AllNew from "@components/AllNew";
import DetailNew from "@components/DetailNew";
import Css from "@uicourse/Modulecss";
import LayoutFlex from "@uicourse/LayoutFlex";
import Visa1 from "@uicourse/Visa1";
import Visa2 from "@uicourse/Visa2";
import Card from "@tailwindcourse/Card";
import Card2 from "@tailwindcourse/Card2";

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
  },
  {
    path:"/visa1",
    element: <Visa1/>
  },
  {
    path:"/visa2",
    element: <Visa2/>
  },
  {
    path: "/tailwind",
    element: <Card/>
  },
  {
    path: "/tailwind2",
    element: <Card2/>
  }
]);

export default Routers;
