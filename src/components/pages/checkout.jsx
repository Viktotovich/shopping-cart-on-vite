import { useContext } from "react";
import { ShopContext } from "../../routes";
import CheckoutItem from "../Checkout-item";

export default function Checkout() {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);

  if (cartItems.length < 1) {
    return (
      <section>
        {" "}
        <p className="no-items">
          You don't have anything in the cart yet! Add items to the cart and
          come back to checkout!
        </p>
      </section>
    );
  } else {
    return (
      <section>
        {cartItems.map((cartItem, index) => (
          <CheckoutItem cartItem={cartItem} index={index} />
        ))}
      </section>
    );
  }
}
