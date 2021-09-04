import React from 'react';
import Hero from '../../assets/Hero.jpg';
import classes from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, faGithub
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className={'section ' + classes.imageContainer} id='home'>
      <img className={classes.hero} src={Hero} alt='hero'></img>
      <div className={classes.bodyContainer}>
        <div className={classes.body}>
          <font>Alan Roddick</font>
          <div className={classes.links}>
            <a href="https://github.com/aroddick" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} color="white" />
            </a>
            <a href="https://www.linkedin.com/in/alan-roddick/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} color="white" />
            </a>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;