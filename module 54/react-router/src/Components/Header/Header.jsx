// import { ActiveLink } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  return (
    <nav>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/friends">Friends</ActiveLink>
      <ActiveLink to="/aboutUs">About</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
    </nav>
  );
};

export default Header;
