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
      <button className="decrement">-</button>
      <p className="current-count">0</p>
      <button className="increment">+</button>
    </div>
  );
}

function AddToCart() {
  return <button>Add to Cart</button>;
}
