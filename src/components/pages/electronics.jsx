import manualCacheController from "../../utilities/cache";
import { useLoaderData } from "react-router-dom";
import ProductGrid from "../product-grid";

export default function Electronics() {
  const products = useLoaderData();
  return (
    <section>
      <ProductGrid products={products} category={"Electronics"} />
    </section>
  );
}

export function electronicsLoader() {
  return manualCacheController.get("electronics");
}
