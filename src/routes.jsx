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
import { useState, createContext } from "react";

export const ShopContext = createContext({});

function Layout({ child }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <>
      <ShopContext.Provider value={{ addToCart }}>
        <Header cartItems={cartItems} addToCart={addToCart} />
        {child}
        <Footer />
      </ShopContext.Provider>
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
