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
import Readmore from './Readmore';
import OurStore from './OurStore';
import FollowUs from './FollowUs';
import Footer from './footer';

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
      <Readmore />
      <OurStore />
      <FollowUs />
      <Footer />
    </main>
  );
};

export default App;