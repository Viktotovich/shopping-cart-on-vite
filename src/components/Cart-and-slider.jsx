import { useState } from "react";

export default function CartAndSlider({ product }) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    if (count < 9) {
      setCount((count) => count + 1);
    }
  }

  function decrementCount() {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }

  function resetCount() {
    setCount((count) => count * 0);
  }

  return (
    <div className="c-and-s">
      <Increment
        handleIncrement={incrementCount}
        handleDecrement={decrementCount}
        count={count}
      />
      <AddToCart handleReset={resetCount} product={product} count={count} />
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

function AddToCart({ handleReset, product, count }) {
  function handleAddToCart() {
    if (count > 0) {
      const itemData = {
        product,
        count,
      };
      console.log(itemData);
      //do something with product and count
      handleReset();
    }
  }
  return <button onClick={handleAddToCart}>Add to Cart</button>;
}
