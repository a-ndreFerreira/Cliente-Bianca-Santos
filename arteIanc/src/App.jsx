
import { Outlet } from 'react-router-dom'

import './App.css'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import { img1, img2 } from './assets/bg_img/bgImg.js'

const images = [img1, img2];

function App() {

  return (
    <div>
      <Navbar />
      <div id='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
