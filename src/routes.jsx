import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { productLoader } from "./App";
import Electronics, { electronicsLoader } from "./components/pages/electronics";
import Jewelery, { jeweleryLoader } from "./components/pages/jewelery";
import Mens, { mensLoader } from "./components/pages/mens";
import Womens, { womensLoader } from "./components/pages/womens";
import Checkout from "./components/pages/checkout";

/*Making this work is my only bet at passing props in a sane way that doesn't do anything 
that breaks the rules of React */
function Layout({ child }) {
  return (
    <>
      <Header />
      {child}
      <Footer />
    </>
  );
}

const routes = [
  {
    path: "/",
    loader: productLoader,
    element: (
      <>
        <Layout child={<App />} />
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
  {
    path: "checkout",
    element: (
      <>
        <Header />
        <Checkout />
        <Footer />
      </>
    ),
  },
];

export default routes;
