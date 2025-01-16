import CartAndSlider from "./Cart-and-slider";
import "../styles/transparent-card.css";

export default function TransparentCard({ product }) {
  return (
    <div className="transparent-div">
      <TransparentBanner product={product} />
      <div className="price-and-desc">
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
      <ProductImage product={product} />
      <CartAndSlider product={product} />
    </div>
  );
}

function TransparentBanner({ product }) {
  return (
    <div className="transparent-banner">
      <div className="title-and-sub">
        <h2>{product.title}</h2>
        <p>{product.rating.rate} ★★★</p>
      </div>
    </div>
  );
}

function ProductImage({ product }) {
  return (
    <div className="t-img-wrapper">
      <img src={product.image} alt={`${product.title} + ${product.category}`} />
    </div>
  );
}
