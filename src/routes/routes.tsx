import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
