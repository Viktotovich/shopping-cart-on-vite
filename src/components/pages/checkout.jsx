import { useContext } from "react";
import { ShopContext } from "../../routes";
import CheckoutItem from "../Checkout-item";
import "../../styles/no-items.css";

export default function Checkout() {
  const { cartItems } = useContext(ShopContext);

  if (cartItems.length < 1) {
    return (
      <section id="empty-cart">
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
