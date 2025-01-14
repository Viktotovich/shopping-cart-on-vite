export default function CartAndSlider() {
  //we need to share state here
  return (
    <div className="c-and-s">
      <Increment />
      <AddToCart />
    </div>
  );
}

function Increment() {
  return (
    <div className="increment-container">
      <p className="decrement">-</p>
      <p className="current-count">0</p>
      <p className="increment">+</p>
    </div>
  );
}

function AddToCart() {
  return <button>Add to Cart</button>;
}
