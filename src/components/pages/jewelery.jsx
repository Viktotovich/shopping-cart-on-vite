import manualCacheController from "../../utilities/cache";
import { useLoaderData } from "react-router-dom";
import ProductGrid from "../product-grid";

export default function Jewelery() {
  const products = useLoaderData();
  return (
    <section>
      <ProductGrid products={products} category={"Jewelery"} />
    </section>
  );
}

export function jeweleryLoader() {
  return manualCacheController.get("jewelery");
}
