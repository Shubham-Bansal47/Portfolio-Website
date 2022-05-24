import React from 'react';
import './App.css';
import Profile from './components/Profile/profile';
import Navbar from './components/Navbar/navbar';
import Home from './components/Homehead/home';
import Contactme from './components/Contactmehead/contactme';
import Contact from './components/Contactme/contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Profile/>
      <Contactme/>
      <Contact/>
    </div>
  );
}

export default App;
