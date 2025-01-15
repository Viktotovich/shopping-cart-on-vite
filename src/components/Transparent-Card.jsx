import CartAndSlider from "./Cart-and-slider";

export default function TransparentCard({ product }) {
  console.log(product);
  return (
    <div className="transparent-div">
      <TransparentBanner product={product} />
      <p>{product.description}</p>
      <ProductImage product={product} />
      <br />
      <hr />
      <CartAndSlider />
    </div>
  );
}

function TransparentBanner({ product }) {
  return (
    <div className="transparent-banner">
      <div className="title-and-sub">
        <h2>{product.title}</h2>
        <p>{product.rating.rate} ⭐</p>
      </div>
      <p>${product.price}</p>
    </div>
  );
}

function ProductImage({ product }) {
  return (
    <img src={product.image} alt={`${product.title} + ${product.category}`} />
  );
}
