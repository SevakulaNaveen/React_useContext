import React from 'react';

const FruitCard = ({ fruit }) => {

  return (
    <div className="flex-none bg-white shadow-md rounded-lg p-6 m-4 text-center border border-black">
      <h2 className="text-2xl font-bold mb-2">{fruit.name}</h2>
      <p className="text-lg text-gray-700">Price: ${fruit.price.toFixed(2)}</p>

    </div>
  );
};

export default FruitCard;
