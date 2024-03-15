import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch('prices.json')
      .then(res => res.json())
      .then(data => setPrices(data));
  }, []);
  return (
    <div className="mx-10">
      <h1 className="text-3xl text-center text-bold text-blue-700 bg-blue-300 font-bold p-3">
        Affordable price
      </h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 text-center">
        {prices.map(price => (
          <PriceCart key={price.id} price={price}></PriceCart>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
