import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { productLoader } from "./App";
import { electronicsLoader } from "./components/pages/electronics";
import Electronics from "./components/pages/electronics";
import { jeweleryLoader } from "./components/pages/jewelery";
import Jewelery from "./components/pages/jewelery";
import { mensLoader } from "./components/pages/mens";
import Mens from "./components/pages/mens";
import Womens, { womensLoader } from "./components/pages/womens";

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
  {
    path: "electronics",
    loader: electronicsLoader,
    element: (
      <>
        <Header />
        <Electronics />
        <Footer />
      </>
    ),
  },
  {
    path: "jewelery",
    loader: jeweleryLoader,
    element: (
      <>
        <Header />
        <Jewelery />
        <Footer />
      </>
    ),
  },
  {
    path: "mens",
    loader: mensLoader,
    element: (
      <>
        <Header />
        <Mens />
        <Footer />
      </>
    ),
  },
  {
    path: "womens",
    loader: womensLoader,
    element: (
      <>
        <Header />
        <Womens />
        <Footer />
      </>
    ),
  },
];

export default routes;
