import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
      {
        index : true,
        element : <HomePage></HomePage>,
      },
      {
        path : "/timeline",
        element : <Timeline></Timeline>
      },
      {
        path : "/friendDetails/:id",
        element : <FriendDetails></FriendDetails>,
        loader :()=> fetch("/friendsData.json")
       
      },
      {
        path:"/stats",
        element:<Stats></Stats>
      }
    ]
  },
  {
    path : "*",
    element : <ErrorPage></ErrorPage>
  }
  
]);