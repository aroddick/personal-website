import React from 'react';
import Hero from '../../assets/Hero.jpg';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div>
      <img src={Hero}></img>
      <div className={classes.bodyContainer}>
        <div className={classes.body}>
          <font>Alan Roddick</font>
        </div>
        <div>
          <a href=''>Github</a>
          <a href=''>LinkedIn</a>
          <a href=''>Github</a>
        </div>
      </div>
    </div>
  )
}

export default Home;