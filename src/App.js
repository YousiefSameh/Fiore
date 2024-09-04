import React from 'react';
import Home from './Home';
import Season from './Season';
import Offers from './offers';
import Popular from './Popular';
import Phrase from './Phrase';
import OurStory from './OurStory';

const App = () => {
  return (
    <main className='font-secondary'>
      <Home />
      <Season />
      <Offers />
      <Popular />
      <Phrase />
      <OurStory />
    </main>
  );
};

export default App;