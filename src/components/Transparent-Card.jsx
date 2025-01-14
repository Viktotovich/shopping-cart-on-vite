import CartAndSlider from "./Cart-and-slider";

export default function TransparentCard() {
  return (
    <div className="transparent-div">
      <TransparentBanner />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        delectus, odit doloremque sed rerum cum deleniti quia eaque quasi
        architecto deserunt, quae cumque tempore qui. Distinctio, hic. Nostrum,
        laborum libero.
      </p>
      <ProductImage />
      <br />
      <hr />
      <CartAndSlider />
    </div>
  );
}

function TransparentBanner() {
  return (
    <div className="transparent-banner">
      <div className="title-and-sub">
        <h2>Product name</h2>
        <p>Product subdescription, colors and the type</p>
      </div>
      <p>$1099</p>
    </div>
  );
}

function ProductImage() {
  return <p>I AM AN IMAGE lol</p>;
}
