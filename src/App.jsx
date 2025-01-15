import "./styles/global.css";
import TransparentCard from "./components/Transparent-Card";
import { useLoaderData } from "react-router-dom";
import sortCats from "./utilities/sort-cats";

function App() {
  const { products } = useLoaderData();

  return (
    <>
      <section>
        <div className="landing-content">
          <div className="first-section">
            <h2>
              The greatest shop of all time. Trusted by 12,000 daily made up
              users! 0% delivery success rate!
            </h2>
            <p>
              Whatever you can image, whatever you ever wanted - we definately
              don't have. If you ever wondered what to do with your extra money,
              wonder no more!
            </p>
            <CTAButtons />
          </div>
          <div className="second-section">
            <TransparentCard product={products[0]} />
          </div>
          <div className="third-section">
            <p>✔️ Late Deliveries</p>
            <p>✔️ Sub-par quality</p>
            <p>✔️ No Post Purchase Service</p>
          </div>
          <div className="fourth-section">
            <h3>Our Trusted Partners:</h3>
            <p>✔️ A company, but they're in another country</p>
            <p>✔️ My grandmother</p>
            <p>
              ✔️ Not even myself (can't trust anyone these days, not even
              yourself)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function CTAButtons() {
  return (
    <div className="cta-buttons">
      <button>Scroll to shop!</button>
      <button>Take me to content!</button>
    </div>
  );
}

export async function productLoader() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  sortCats.init(await products);
  return { products };
}

export default App;
