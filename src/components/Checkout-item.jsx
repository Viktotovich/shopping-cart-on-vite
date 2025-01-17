import { useState, useContext } from "react";
import { ShopContext } from "../routes";
import "../styles/checkout-items.css";

export default function CheckoutItem({ cartItem, index }) {
  return (
    <div className="checkout-container" key={cartItem.product.title}>
      <div className="tile-x-amount">
        <p>{cartItem.product.title}</p>
        <p>{cartItem.count} Piece(s)</p>
      </div>
      <div className="u-or-r-container">
        <UpdateAndChange
          quantity={cartItem.count}
          cartItem={cartItem}
          index={index}
        />
        <RemoveFromCart cartItem={cartItem} index={index} />
      </div>
      <div className="img-container">
        <img
          src={cartItem.product.image}
          alt={cartItem.product.title + cartItem.product.category}
        />
      </div>
    </div>
  );
}

function UpdateAndChange({ quantity, cartItem, index }) {
  const [count, setCount] = useState(quantity);

  function incrementCount() {
    if (count < 9) {
      setCount((count) => count + 1);
    } else {
      alert("You cannot request more than 9 items");
    }
  }

  function decrementCount() {
    if (count > 1) {
      setCount((count) => count - 1);
    } else {
      alert("Consider removing item from cart");
    }
  }

  function resetCount() {
    setCount((count) => count * 0);
  }
  return (
    <div className="update-cart-container">
      <UpdateCart
        cartItem={cartItem}
        handleReset={resetCount}
        count={count}
        index={index}
      />
      <Increment
        handleDecrement={decrementCount}
        handleIncrement={incrementCount}
        count={count}
      />
    </div>
  );
}

function Increment({ handleDecrement, handleIncrement, count }) {
  return (
    <div className="increment-container">
      <button className="decrement" onClick={handleDecrement}>
        -
      </button>
      <p className="current-count">{count}</p>
      <button className="increment" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

function UpdateCart({ cartItem, count, index }) {
  const { updateCart } = useContext(ShopContext);

  function handleUpdateCart() {
    const product = cartItem.product;
    const itemData = {
      product,
      count,
    };

    updateCart(index, itemData);
  }

  return <button onClick={handleUpdateCart}>Update</button>;
}

function RemoveFromCart({ index }) {
  const { deleteFromCart } = useContext(ShopContext);

  function handleDelete() {
    deleteFromCart(index);
  }

  return (
    <div className="remove-from-cart-container">
      <button onClick={handleDelete}>Remove from cart</button>
    </div>
  );
}
