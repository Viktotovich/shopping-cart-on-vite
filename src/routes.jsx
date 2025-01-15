import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { productLoader } from "./App";
import Electronics, { electronicsLoader } from "./components/pages/electronics";
import Jewelery, { jeweleryLoader } from "./components/pages/jewelery";
import Mens, { mensLoader } from "./components/pages/mens";
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
