import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import SingleShow from "../pages/home/SingleShow";
import BookTicket from "../pages/book-ticket/BookTicket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shows/:id",
        element: <SingleShow></SingleShow>,
      },
      {
        path: "/shows/book-ticket",
        element: <BookTicket></BookTicket>,
      },
    ],
  },
]);

export default router;
