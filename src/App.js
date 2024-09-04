import React from 'react';
import Home from './Home';
import Season from './Season';
import Offers from './offers';

const App = () => {
  return (
    <main className='font-secondary'>
      <Home />
      <Season />
      <Offers />
    </main>
  );
};

export default App;