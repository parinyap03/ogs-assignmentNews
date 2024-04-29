import { createBrowserRouter } from "react-router-dom";

// import HomePage from "@components/HomePage";
// import HP from "@components/HomePage";
import HomePage from "../components/HomePage";
import MainPage from "../components/MainPage";
import NotFound from "../components/NotFound";
import AllNew from "../components/AllNew";
import DetailNew from "../components/DetailNew";
import Css from "@uicourse/Modulecss";
import LayoutFlex from "@uicourse/LayoutFlex";
import Visa1 from "@uicourse/Visa1";
import Visa2 from "@uicourse/Visa2";
import Card from "@tailwindcourse/Card";
import Card2 from "@tailwindcourse/Card2";
import Form from "@cssframewcourse/Form";
import Regis from "../components/Regis";
import TestFetchData from "@apicourse/TestFetchData";
import ApiWorkshop from "@apicourse/ApiWorkshop";

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
  },
  {
    path: "/form",
    element: <Form/>
  },
  {
    path: "/regis",
    element: <Regis/>
  },
  {
    path: "/testfetch",
    element: <TestFetchData/>
  },
  {
    path: "/harry",
    element: <ApiWorkshop/>
  }
]);

export default Routers;
