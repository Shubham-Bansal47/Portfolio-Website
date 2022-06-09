import React from 'react';
import './App.css';
import Profile from './components/Profile/profile';
import Navbar from './components/Navbar/navbar';
import Home from './components/Homehead/home';
import Contactme from './components/Contactmehead/contactme';
import Contact from './components/Contactme/contact';
import Aboutmehead from './components/Aboutmehead/aboutmehead';
import Aboutme from './components/Aboutme/aboutme';
import Resumehead from './components/Resumehead/resumehead';
import Resume from './components/Resume/resume';
import Footer from './components/Footer/footer';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Profile/>
      <Aboutmehead/>
      <Aboutme/>
      <Resumehead/>
      <Resume/>
      <Contactme/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
