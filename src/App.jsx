import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';


import './App.css'

import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Nav />
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
