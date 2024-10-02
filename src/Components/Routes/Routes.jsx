import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "../StartPage";
import Game from "../Game";
import Score from "../Score";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/Game",
    element: <Game />,
  },
  {
    path:"/score",
    element:<Score/>
  }
]);

const Route = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default Route;
