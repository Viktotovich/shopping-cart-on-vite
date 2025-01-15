import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { productLoader } from "./App";

const routes = [
  {
    path: "/",
    loader: productLoader,
    element: (
      <>
        <Header />
        <App />
        <Footer />
      </>
    ),
    errorElement: (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    ),
  },
];

export default routes;
