import React, { useEffect } from 'react';
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
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#resume'>Resume</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>

    </div >
  )
}

export default Header;