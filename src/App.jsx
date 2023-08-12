import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './component/Header.jsx';
import Introduction from './component/Introduction.jsx';
import AboutUs from './component/About-Us.jsx';
import OurWorks from './component/Our-Works.jsx';
import Subscribe from './component/Subscribe.jsx';
import Footer from './component/Footer.jsx';

function App() {
  return (
    <>
      <div id="container" className="flex flex-col w-full h-auto">
        <Header></Header>
        <main className="flex flex-col gap-10">
          <Introduction/>
          <AboutUs/>
        </main>
        <OurWorks/>
        <Subscribe/>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
