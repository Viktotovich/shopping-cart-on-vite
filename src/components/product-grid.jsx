import CartAndSlider from "./Cart-and-slider";

export default function ProductGrid({ products, category }) {
  return (
    <div className="products-container">
      <h2 className="p-cat">{category}</h2>
      <div className="p-grid">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="product" key={product.title}>
      <p className="p-grid-title">{product.title}</p>
      <img src={product.image} alt={product.title} />
      <p className="p-grid-desc">{product.description}</p>
      <p className="p-grid-price">{product.price}</p>
      <CartAndSlider product={product} />
    </div>
  );
}
