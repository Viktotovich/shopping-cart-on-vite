import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const routes = [
  {
    path: "/",
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
