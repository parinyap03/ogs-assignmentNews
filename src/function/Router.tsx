import { createBrowserRouter } from "react-router-dom";

// import HomePage from "@components/HomePage";
// import HP from "@components/HomePage";
import HomePage from "../components/HomePage";
import MainPage from "../components/MainPage";
// import NotFound from "../components/NotFound";
import AllNew from "../components/AllNew";
import DetailNew from "../components/DetailNew";
import Css from "@uicourse/Modulecss";
import LayoutFlex from "@uicourse/LayoutFlex";
import Visa1 from "@uicourse/Visa1";
import Visa2 from "@uicourse/Visa2";
import Card from "@tailwindcourse/Card";
import Card2 from "@tailwindcourse/Card2";
import Regis from "../components/Regis";
import TestFetchData from "@apicourse/TestFetchData";
import ApiWorkshop from "@apicourse/ApiWorkshop";
import Pokemon from "@assignmentpokemon/Page";
// import Filter from "@assignmentpokemon/Filter";
// import Example from "@workshoppokemon/Example";
import Home from "@workshoppokemon/Home";
import PokemonDetail from "../workshoppokemon/PokemonDetail";
import NotFound from "../workshoppokemon/NotFound";
import Detail from "@assignmentpokemon/Detail";
import NoPage from "@assignmentpokemon/NoPage";
import HomeQuiz from "@assignmentquiz/HomeQuiz";
import Evaluate from "@assignmentquiz/Evaluate";
import Quiz from "@assignmentquiz/Quiz";
import Score from "@assignmentquiz/Score";
// import HomeQuizLayout from "@assignmentquiz/HomeQuizLayout";
import NavQuiz from "@assignmentquiz/NavQuiz";

const Routers = createBrowserRouter([
  {
    path: "*",
    element: <NoPage />,
    // element: <NotFound />,
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
    path: "/visa1",
    element: <Visa1 />,
  },
  {
    path: "/visa2",
    element: <Visa2 />,
  },
  {
    path: "/tailwind",
    element: <Card />,
  },
  {
    path: "/tailwind2",
    element: <Card2 />,
  },

  {
    path: "/regis",
    element: <Regis />,
  },
  {
    path: "/testfetch",
    element: <TestFetchData />,
  },
  {
    path: "/harry",
    element: <ApiWorkshop />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/pokemon/pokemon-list",
    element: <Home />,
  },
  {
    path: "/pokemon/detail/:name_pokemon",
    element: <PokemonDetail />,
  },
  {
    path: "/homepk",
    element: <Home />,
  },
  {
    path: "/detail/:pokemon",
    element: <Detail />,
  },
  // {
  //   path: "/",
  //   element: <NavQuiz />,
  //   children:[
  //     {
  //       path: "homequiz",
  //       element: <HomeQuiz />,

  //     },
  //     {
  //       path: "evaluate",
  //       element: <Evaluate />,
  //     },
  //     {
  //       path: "quiz",
  //       element: <Quiz />,
  //     },
  //     {
  //       path: "score",
  //       element: <Score />,
  //     },
  //   ]
  // },
  {
    path: "/navquiz",
    element: <NavQuiz />,
  },
  {
    path: "homequiz",
    element: <HomeQuiz />,
  },
  {
    path: "evaluate",
    element: <Evaluate />,
  },
  {
    path: "quiz",
    element: <Quiz />,
  },
  {
    path: "score",
    element: <Score />,
  },
]);

export default Routers;
