import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/resume' exact component={Resume} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
      <footer> <small>Copyright &copy; {new Date().getFullYear()} </small> </footer> 
    </div>

  );
}

export default App;
