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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>
        ),
      },
      {
        path: "/available",
        element: <Available></Available>,
      },
      {
        path: "/addfood",
        element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>,
      },
      {
        path: "/myfood",
        element: <PrivateRoutes><Myfood></Myfood></PrivateRoutes>,
      },
      {
        path: "/request",
        element: <PrivateRoutes><RequestFood></RequestFood></PrivateRoutes>,
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
          fetch(`http://localhost:5000/foodsitem/${params.id}`),
      }      
    ],
  },
]);

export default router;
