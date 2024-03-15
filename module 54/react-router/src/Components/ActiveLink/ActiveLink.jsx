import { NavLink } from 'react-router-dom';
import './ActiveLink.css';
import PropTypes from 'prop-types';

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
      {children}
    </NavLink>
  );
};
ActiveLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ActiveLink;
