
import React from 'react';
import Heading from './routes/Heading.js';
import Navbar from './routes/Navbar.js';
import Menu from './routes/Menu.js';
import Footer from './routes/Footer.js';
import './index.css';


export default function App() {
  return (
    <div className='container-fluid'>
    <Heading />
    <Navbar />
    <Menu />
    <Footer />
    </div>
  )
}


