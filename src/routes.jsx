import App from "./App";
import ExampleRoute from "./components/routes-example";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "test",
    element: <ExampleRoute />,
  },
];

export default routes;
