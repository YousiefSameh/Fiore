import React from 'react';
import Home from './Home';
import Season from './Season';
import Offers from './offers';
import Popular from './Popular';
import Phrase from './Phrase';
import OurStory from './OurStory';
import Gifts from './Gifts';
import SchoolFlower from './SchoolFlower';
import Blogs from './Blogs';

const App = () => {
  return (
    <main className='font-secondary'>
      <Home />
      <Season />
      <Offers />
      <Popular />
      <Phrase />
      <OurStory />
      <Gifts />
      <SchoolFlower />
      <Blogs />
    </main>
  );
};

export default App;