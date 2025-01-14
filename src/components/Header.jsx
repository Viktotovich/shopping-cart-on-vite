import { NavLink, Link } from "react-router-dom";
//SVG icons
import Favorites from "./svg/Favorites";
import ProfileIcon from "./svg/Profile-icon";
import SearchIcon from "./svg/Search-icon";
import ShoppingCart from "./svg/cart-svg";

export default function Header() {
  return (
    <nav>
      <div className="categories-header">
        <NavLink to="/electronics">Electronics</NavLink>
        Jewelery
        <NavLink to="/mens">Men's Clothing</NavLink>
        <NavLink to="/womens">Women's Clothing</NavLink>
      </div>
      <NavLink to="/">Buy A Dude | Fake Store</NavLink>
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
