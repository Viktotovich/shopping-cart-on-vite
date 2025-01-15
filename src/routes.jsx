import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { productLoader } from "./App";
import Electronics from "./components/pages/electronics";

const routes = [
  {
    path: "/",
    //loader: productLoader,
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
  {
    path: "electronics",
    element: (
      <>
        <Header />
        <Electronics />
        <Footer />
      </>
    ),
  },
];

export default routes;
