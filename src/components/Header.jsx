import { NavLink, Link } from "react-router-dom";
//SVG icons
import Favorites from "./svg/Favorites";
import ProfileIcon from "./svg/Profile-icon";
import SearchIcon from "./svg/Search-icon";
import ShoppingCart from "./svg/cart-svg";
//styles
import "../styles/header.css";

export default function Header() {
  return (
    <nav>
      <div className="categories-header">
        <NavLink to="/electronics">Electronics</NavLink>
        <NavLink to="/jewelery">Jewelery</NavLink>
        <NavLink to="/mens">Men's Clothing</NavLink>
        <NavLink to="/womens">Women's Clothing</NavLink>
      </div>
      <NavLink to="/" id="company-name">
        Buy A Dud | Fake Store
      </NavLink>
      <div className="header-icons">
        <SearchIcon />
        <ProfileIcon />
        <Favorites />
        <Link to="/checkout">
          <span className="notifications"></span>
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
