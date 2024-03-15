import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Home = () => {
  const shirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = shirts => {
    const exist = cart.find(ts => ts._id === shirts._id);
    if (exist) {
      toast('This product already exist');
    } else {
      const newCart = [...cart, shirts];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = id => {
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="shirt-container">
        {shirts.map(shirt => (
          <TShirt
            key={shirt._id}
            shirt={shirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart carts={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
