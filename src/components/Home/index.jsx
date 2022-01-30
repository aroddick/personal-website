import React from 'react';
import Styles from './styles.module.scss';
import Hero from '/assets/Hero.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, faGithub
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className={Styles.imageContainer} id='home'>
      <img className={Styles.hero} src={Hero} alt='hero' />
      <div className={Styles.bodyContainer}>
        <div className={Styles.body}>
          <font>Alan Roddick</font>
          <div className={Styles.links}>
            <a href="https://github.com/aroddick" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} color="white" style={{ width: "3rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/alan-roddick/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} color="white" style={{ width: "3rem" }} />
            </a>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;