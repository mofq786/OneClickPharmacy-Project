import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavBar/>
      <Footer/>
    </>
  )
}

export default App
