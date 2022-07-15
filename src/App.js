import React from 'react';
import './App.css';
import Profile from './components/Profile/profile';
import Navbar from './components/Navbar/navbar';
import Contact from './components/Contactme/contact';
import Aboutme from './components/Aboutme/aboutme';
import Resume from './components/Resume/resume';
import Footer from './components/Footer/footer';
import Headings from './components/Headings/headings';

function App() {
  
  const list=[
    { 
      heading: "HOME",
      intro: "Here You Can Know Me"
    },
    {
      heading: "ABOUT ME",
      intro: "Here's My Short Introduction"
    },
    {
      heading: "RESUME",
      intro: "Have a look at My Resume"
    },
    {
      heading: "CONTACT ME",
      intro: "Let's Get In Touch"
    }
  ];

  return(
    <div className="App">
      <Navbar/>
      <Headings 
      sendingtitle={list[0].heading} 
      sendingintro={list[0].intro}/>
      <Profile/>
      <Headings 
      sendingtitle={list[1].heading} 
      sendingintro={list[1].intro}/>
      <Aboutme/>
      <Headings 
      sendingtitle={list[2].heading} 
      sendingintro={list[2].intro}/>
      <Resume/>
      <Headings 
      sendingtitle={list[3].heading}
      sendingintro={list[3].intro}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
