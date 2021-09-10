import React,{useState} from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';



function Home() {

  const [scrollToAbout,setScrollToAbout] = useState(false);

  return (
    <>
      <HeroSection />
      <Cards scroll={scrollToAbout}/>
    </>
  );
}

export default Home;
