import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Navbar/Home";
import Available from "../Navbar/Available";
import AddFood from "../Navbar/AddFood";
import Myfood from "../Navbar/Myfood";
import RequestFood from "../Navbar/RequestFood";
import Login from "../User/Login";
import Register from "../User/Resigter";
import PrivateRoutes from "./PrivateRoutes";
import UpdatedFood from "../Updated/UpdatedFood";
import SortSingleView from "../Available/SortSingleView";
import ErrorPage from "../ErrorPage/ErrorPage";
import Modal from "../Request/Modal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://nourishnet-food-website-server.vercel.app/foodsitem"),
      },
      {
        path: "/available",
        element: <Available></Available>,
        loader: () => fetch("https://nourishnet-food-website-server.vercel.app/foodsitem"),
      },
      {
        path: "/addfood",
        element: (
          <PrivateRoutes>
            <AddFood></AddFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myfood",
        element: (
          <PrivateRoutes>
            <Myfood></Myfood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/request",

        element: (
          <PrivateRoutes>
            <RequestFood></RequestFood>
          </PrivateRoutes>
        ),
        loader:()=>fetch('https://nourishnet-food-website-server.vercel.app/request')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: <UpdatedFood></UpdatedFood>,
        loader: ({ params }) =>
          fetch(`https://nourishnet-food-website-server.vercel.app/foodsitem/${params.id}`),
      },
      {
        path: "/view_details/:id",
        element: <SortSingleView></SortSingleView>,
        loader: ({ params }) =>
          fetch(`https://nourishnet-food-website-server.vercel.app/foodsitem/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <Modal></Modal>,
        loader: ({ params }) =>
          fetch(`https://nourishnet-food-website-server.vercel.app/foodsitem/${params.id}`),
      },
    ],
  },
]);

export default router;
