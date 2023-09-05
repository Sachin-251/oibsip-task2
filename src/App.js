import React, { useEffect, useState} from 'react';
import Navbar from './scenes/Navbar';
// import useMediaQuery from './hooks/useMediaQuery';
import LandingPage from './scenes/LandingPage';
import About from './scenes/About';
import LineGradient from  './components/LineGradient';
import Accomplishments from './scenes/Accomplishments';
import Legacy from './scenes/Legacy';
import Footer from './scenes/Footer';


function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <div className="app">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      
      {/* {isAboveMediumScreens && (
        <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      )} */}
   
        <LandingPage setSelectedPage={setSelectedPage} />

      <LineGradient />
        <About setSelectedPage={setSelectedPage} />

      <LineGradient />
      <Accomplishments setSelectedPage={setSelectedPage}/>

      <LineGradient />
      <Legacy setSelectedPage={setSelectedPage}/>

      <Footer />
    </div>
  );
}

export default App;
