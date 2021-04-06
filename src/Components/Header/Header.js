import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import classes from './Header.module.css';

const Header = () => {
  
  return (
    <div className={classes.container} id='header'>
      <div className={classes.links}>
        <NavHashLink to='/#home' activeClassName={classes.active}>Home</NavHashLink>
        <NavHashLink to='/#about' activeClassName={classes.active}>About</NavHashLink>
        <NavHashLink to='/#resume' activeClassName={classes.active}>Resume</NavHashLink>
        <NavHashLink to='/#project' activeClassName={classes.active}>Projects</NavHashLink>

        {/* <a href='#home' activeClassName={classes.active} onClick={this.className = classes.active}>Home</a>
        <a href='#about' activeClassName={classes.active}>About</a>
        <a href='#resume' activeClassName={classes.active}>Resume</a>
        <a href='#projects' activeClassName={classes.active}>Projects</a> */}
      </div>

    </div >
  )
}

export default Header;