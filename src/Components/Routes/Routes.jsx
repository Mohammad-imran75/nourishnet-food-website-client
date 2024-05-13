
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Navbar/Home";
import Available from "../Navbar/Available";
import AddFood from "../Navbar/AddFood";
import Myfood from "../Navbar/Myfood";
import RequestFood from "../Navbar/RequestFood";
import Login from "../User/Login";
import Register from "../User/Resigter";



    const router = createBrowserRouter([
        {
          path:'/',
          element:<Root></Root>,
          children:[
            {
              path:'/',
              element:<Home></Home>
            },{
              path:'/available',
              element:<Available></Available>
            },{
              path:'/addfood',
              element:<AddFood></AddFood>
            },{
              path:'/myfood',
              element:<Myfood></Myfood>
            },{
              path:'/request',
              element:<RequestFood></RequestFood>
            },{
              path:'/login',
              element:<Login></Login>
            },{
              path:'/register',
              element:<Register></Register>
            }
          ]
        },
      ]);
    

export default router;