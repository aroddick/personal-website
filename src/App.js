import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import './App.css';

function App() {
  window.onscroll = function () { makeSticky() };
  var header = document.getElementById('header');
  var sticky;
  if (header) {
    sticky = header.offsetTop;
  }

  function makeSticky() {
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
  }
  return (
    <div>
      <Header />
      {/* <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/resume' exact component={Resume} />
        <Route path='/projects' exact component={Projects} />
      </Switch> */}
      <Home />
      <About />
      <Resume />
      <Projects />
      <footer> <small>Copyright &copy; {new Date().getFullYear()} </small> </footer> 
    </div>

  );
}

export default App;
