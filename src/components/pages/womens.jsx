import manualCacheController from "../../utilities/cache";
import { useLoaderData } from "react-router-dom";
import ProductGrid from "../product-grid";

export default function Womens() {
  const products = useLoaderData();
  return (
    <section>
      <ProductGrid products={products} category={"Womens"} />
    </section>
  );
}

export function womensLoader() {
  return manualCacheController.get("womens");
}
