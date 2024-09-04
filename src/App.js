import React from 'react';
import Home from './Home';
import Season from './Season';
import Offers from './offers';
import Popular from './Popular';

const App = () => {
  return (
    <main className='font-secondary'>
      <Home />
      <Season />
      <Offers />
      <Popular />
    </main>
  );
};

export default App;