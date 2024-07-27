
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import img1 from './assets/bg_img/clockFace.jpeg';
import img2 from './assets/bg_img/double.jpeg';
import img3 from './assets/bg_img/heart.jpeg';


function App() {

  const [background, setBackground] = useState(null);

  useEffect(() => {

    const images = [img1, img2, img3];

    const changeBackground = () => {

      const randomBackground = images[Math.floor(Math.random() * images.length)];
      setBackground(`url(${randomBackground})`);

    }

    return changeBackground();

  }, [])

  return (
    <div>
      <Navbar />
      <div id='container' style={{
        position: 'relative',
        backgroundImage: background,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        overflow: 'hidden'
      }}>
        <div id='sleeve'></div>

        <div id='containerOutlet'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
