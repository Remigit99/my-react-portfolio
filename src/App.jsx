import { useState } from 'react'

import './App.css'
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';

const App = () => {


  return (
    <div className="container app__container">

      <h1>You Are Welcome To My World</h1>
      <Nav />
      <Header />
      <About />

    </div>
  )
}

export default App;
