import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-4 rounded-md p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-blue-700 font-extrabold text-5xl">
          {price.price}
        </span>
        <span className="text-2xl text-white font-bold">/mon</span>
      </h2>
      <h5 className="text-2xl font-bold text-center my-4">{price.name}</h5>
      <div className="text-left">
        <p className="font-bold text-white underline">Features: </p>
        {price.features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="text-xl w-full py-2 bg-green-500 rounded-md text-white font-bold mt-auto hover:bg-green-800 duration-700">
        Buy Nwo
      </button>
    </div>
  );
};

export default PriceCart;
