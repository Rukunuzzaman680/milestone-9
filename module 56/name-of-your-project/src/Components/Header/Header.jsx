import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="./about">About</Link>
      <Link to="./contact">Contact</Link>
      <Link to="./grandpa">GrandPa</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/review">Order Review</Link>
    </nav>
  );
};

export default Header;
