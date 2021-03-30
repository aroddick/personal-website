import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </div>

  );
}

export default App;
