import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "../StartPage";
import Game from "../Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/Game",
    element: <Game />,
  },
]);

const Route = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default Route;
