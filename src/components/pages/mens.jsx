import manualCacheController from "../../utilities/cache";
import { useLoaderData } from "react-router-dom";
import ProductGrid from "../product-grid";

export default function Mens() {
  const products = useLoaderData();
  return (
    <section>
      <ProductGrid products={products} category={"Mens"} />
    </section>
  );
}

export function mensLoader() {
  return manualCacheController.get("mens");
}
