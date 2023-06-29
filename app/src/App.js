
import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './routes/Heading.js';
import Navbar from './routes/Navbar.js';
import Footer from './routes/Footer.js';
import './index.css';


export default function App() {
  return (
    <div className='container-fluid'>
    <Heading />
    <Navbar />
    <Footer />
    </div>
  )
}


