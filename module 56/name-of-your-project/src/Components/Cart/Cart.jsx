import PropTypes from 'prop-types';

const Cart = ({ carts, handleRemoveFromCart }) => {
  let message;
  if (carts.length === 0) {
    message = <p>Please add a product</p>;
  } else {
    message = (
      <div>
        <p>thanks</p>
      </div>
    );
  }
  return (
    <div>
      <h2>cart component: {carts.length}</h2>
      {carts.length > 2 ? <span>Continue Buy</span> : <span>empty cash</span>}
      {message}
      {carts.map(cart => (
        <p key={cart._id}>
          {cart.name}{' '}
          <button onClick={() => handleRemoveFromCart(cart._id)}>X</button>
        </p>
      ))}

      {carts.length === 2 && <p>Double product</p>}
      {carts.length === 3 || <h2>without three </h2>}
    </div>
  );
};

Cart.propTypes = {
  carts: PropTypes.array.isRequired,
};

Cart.propTypes = {
  handleRemoveFromCart: PropTypes.array.isRequired,
};

export default Cart;

/**
 * 1.. use if/else set a variable that will content an element, components
 * ternary operator: condition ? 'true' : 'false'
 *Logical &&: (if the condition true then the text thing will be displayed)
 *Logical || (if the condition is false then the next thing will be displayed)
 */
