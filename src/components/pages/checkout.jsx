import { useContext } from "react";
import { ShopContext } from "../../routes";

export default function Checkout() {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);

  return (
    <section>
      {" "}
      <p>test</p>
    </section>
  );
}
