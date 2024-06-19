import React, { useContext, useState } from 'react';
import './App.css';
import FruitContext from './context/FruitContext';
import FruitCard from './FruitCard';

function App() {
  const { fruits } = useContext(FruitContext);




  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-4">Fruit List</h1>
      <div className="flex flex-wrap justify-center">
        {fruits.map(fruit => (
          <FruitCard key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
}

export default App;
