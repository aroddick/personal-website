import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import './App.css';

function App() {
  useEffect(() => {
    var header = document.getElementById('header');
    var sticky;
    if (header) {
      sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    window.addEventListener('scroll', () => {
      if (!header) {
        header = document.getElementById('header');
        sticky = header.offsetTop;
      }
      if (header) {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    });
  }, [])

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <footer> <small>Copyright &copy; {new Date().getFullYear()} </small> </footer>
    </div>

  );
}

export default App;
