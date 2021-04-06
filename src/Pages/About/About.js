import React from 'react';
import classes from './About.module.css';
import headshot from '../../assets/headshot.jpg';
import ucsb from '../../assets/ucsb.jpeg';
import guitar from '../../assets/guitar.JPG';
import osu from '../../assets/osu.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, faGithub
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div id='about' className='section'>
      <div className={classes.header}>
        <div className={classes.imageContainer}>
          <img className={classes.hero} src={ucsb}></img>
        </div>
        <div className={classes.container}>
          <div className={classes.row}>
            <img className={classes.profile} width='300' src={headshot}></img>
            <div className={classes.introduction}>
              Hello Everyone! I am a fourth year Computer Science student at the University of California, Santa Barbara. I am pursuing a masters in Computer Science.
            </div>
          </div>
          {/* <div className={classes.links}>
            <a href="https://github.com/aroddick" target="_blank">
              <FontAwesomeIcon icon={faGithub} color="white" />
            </a>
            <a href="https://www.linkedin.com/in/alan-roddick/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} color="white" />
            </a>

          </div> */}
        </div>
      </div>
      <div className={classes.interests}>
        <h1>Interests</h1>
        {/* <div className={classes.column}>
          <div className={classes.row}>
            <p>I've been playing guitar for about 10 years. It is one of my favorite things to do when I am stressed.</p>
            <img className={classes.picture} src={guitar}></img>
          </div>
          <div className={classes.row}>
            <img className={classes.picture} src={osu}></img>
            <p>Huuuuuuuuge Ohio State football fan. Happy the season is resumed and will cheer them on to the championship!</p>
          </div>
        </div> */}
        <div className={classes.row}>
          <div className={classes.interest}>
            <img className={classes.picture} src={guitar} style={{ objectPosition: '50% 0%' }}></img>
            <p className={classes.description}>I've been playing guitar for about 10 years. It is one of my favorite things to do when I am stressed.</p>
          </div>
          <div className={classes.interest}>
            <img className={classes.picture} src={osu}></img>
            <p className={classes.description}>Huuuuuuuuge Ohio State football fan. Happy the season is resumed and will cheer them on to the championship!</p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.interest}>
            <img className={classes.picture} src={guitar} style={{ objectPosition: '50% 0%' }}></img>
          </div>
          <div className={classes.interest}>
            <img className={classes.picture} src={osu}></img>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About;