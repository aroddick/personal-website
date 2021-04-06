import React, { useEffect } from 'react';
// import { NavHashLink } from 'react-router-hash-link';
// import { NavLink, Link } from 'react-router-dom';
import classes from './Header.module.css';

function addActive(links, sections, i) {
  for (let j = 0; j < links.length; j++) {
    links[j].classList.remove(classes.active);
  }
  document.querySelector("#header div a[href='#" + sections[i].id.toString() + "']").classList.add(classes.active);
}

const Header = () => {

  useEffect(() => {
    const sections = document.getElementsByClassName('section');
    console.log(sections)
    const links = document.querySelectorAll('#header div a');
    for (let i = sections.length - 1; i >= 0; i--) {
      if (window.pageYOffset >= sections[i].offsetTop - window.screen.height / 2) {
        addActive(links, sections, i);
        break;
      }
    }
    window.addEventListener('scroll', function () {
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.pageYOffset >= sections[i].offsetTop - window.screen.height / 2) {
          addActive(links, sections, i);
          break;
        }
      }
    });
  }, [])

  return (
    <div className={classes.container} id='header'>
      <div className={classes.links}>
        {/* <NavHashLink to='/#home' activeClassName={classes.active} isActive={() => inView('home')}>Home</NavHashLink>
        <NavHashLink to='/#about' activeClassName={classes.active} isActive={() => inView('about')}>About</NavHashLink>
        <NavHashLink to='/#resume' activeClassName={classes.active} isActive={() => inView('resume')}>Resume</NavHashLink>
        <NavHashLink to='/#project' activeClassName={classes.active} isActive={() => inView('project')}>Projects</NavHashLink> */}

        {/* <NavLink to='/#home' activeClassName={classes.active}>Home</NavLink>
        <NavLink to='/#about' activeClassName={classes.active}>About</NavLink>
        <NavLink to='/#resume' activeClassName={classes.active}>Resume</NavLink>
        <NavLink to='/#project' activeClassName={classes.active}>Projects</NavLink> */}

        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#resume'>Resume</a>
        <a href='#projects'>Projects</a>
      </div>

    </div >
  )
}

export default Header;