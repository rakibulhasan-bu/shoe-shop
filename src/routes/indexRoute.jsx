import { createBrowserRouter } from "react-router-dom";
import { Main, Product } from "../layout";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/product-details/:id",
        element: <Product />,
      },
    ],
  },
]);

export default router;
