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

//hooks
import { useState } from "react";

/*Making this work is my only bet at passing props in a sane way that doesn't do anything 
that breaks the rules of React */
function Layout({ child }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} />
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
        <Layout child={<ErrorPage />} />
      </>
    ),
  },
  {
    path: "electronics",
    loader: electronicsLoader,
    element: (
      <>
        <Layout child={<Electronics />} />
      </>
    ),
  },
  {
    path: "jewelery",
    loader: jeweleryLoader,
    element: (
      <>
        <Layout child={<Jewelery />} />
      </>
    ),
  },
  {
    path: "mens",
    loader: mensLoader,
    element: (
      <>
        <Layout child={<Mens />} />
      </>
    ),
  },
  {
    path: "womens",
    loader: womensLoader,
    element: (
      <>
        <Layout child={<Womens />} />
      </>
    ),
  },
  {
    path: "checkout",
    element: (
      <>
        <Layout child={<Checkout />} />
      </>
    ),
  },
];

export default routes;
