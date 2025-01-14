import { Link } from "react-router-dom";
//SVG icons
import Favorites from "./svg/Favorites";
import ProfileIcon from "./svg/Profile-icon";
import SearchIcon from "./svg/Search-icon";
import ShoppingCart from "./svg/cart-svg";

export default function Header() {
  return (
    <nav>
      <div className="categories-header">
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/mens">Men's Clothing</Link>
        <Link to="/womens">Women's Clothing</Link>
      </div>
      <div className="brand-name">Buy-a-Dud</div>
      <div className="header-icons">
        <SearchIcon />
        <ProfileIcon />
        <Favorites />
        <Link to="/checkout">
          {/*Both span and shopping cart need props */}
          <span className="notifications" />
          <ShoppingCart />
        </Link>
      </div>
    </nav>
  );
}

/**
    REMINDER: Pass a prop to cart to show empty / full SVG 
    dynamically
 */
