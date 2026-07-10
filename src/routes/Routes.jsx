import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import HomePage from "../pages/homepage/HomePage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

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
        path : "/books",
        element : <Books></Books>,
      },
      {
        path : "/friendDetails/:id",
        element : <FriendDetails></FriendDetails>,
        loader :()=> fetch("/friendsData.json")
       
      }
    ]
  },
  {
    path : "*",
    element : <ErrorPage></ErrorPage>
  }
  
]);