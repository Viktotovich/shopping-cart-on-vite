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
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to cart</button>
    </div>
  );
}
