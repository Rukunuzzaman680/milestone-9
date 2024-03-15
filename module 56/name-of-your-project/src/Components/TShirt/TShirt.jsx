import './TShirt.css';
import PropTypes from 'prop-types';

const TShirt = ({ shirt, handleAddToCart }) => {
  const { name, picture, price } = shirt;
  return (
    <div className="tShirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <h3>${price}</h3>
      <button onClick={() => handleAddToCart(shirt)}>Buy Now</button>
    </div>
  );
};

TShirt.propTypes = {
  shirt: PropTypes.string.isRequired,
};
TShirt.propTypes = {
  handleAddToCart: PropTypes.func.isRequired, // Assuming it's a function, adjust accordingly
};

export default TShirt;
