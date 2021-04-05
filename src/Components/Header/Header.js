import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.links}>
        {/* <NavLink exact to='/' activeClassName={classes.active}>Home</NavLink>
        <NavLink to='#about' activeClassName={classes.active}>About</NavLink>
        <NavLink to='#resume' activeClassName={classes.active}>Resume</NavLink>
        <NavLink to='/projects' activeClassName={classes.active}>Projects</NavLink> */}

      <a exact href='/' activeClassName={classes.active}>Home</a>
      <a href='#about' activeClassName={classes.active}>About</a>
      <a href='#resume' activeClassName={classes.active}>Resume</a>
      <a href='#projects' activeClassName={classes.active}>Projects</a>
    </div>

    </div >
  )
}

export default Navbar;