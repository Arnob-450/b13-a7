import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import HomePage from "../pages/homepage/HomePage";
import ErrorPage from "../pages/errorPage/ErrorPage";

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
      }
    ]
  },
  {
    path : "*",
    element : <ErrorPage></ErrorPage>
  }
  
]);