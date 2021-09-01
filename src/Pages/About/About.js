import React from 'react';
import classes from './About.module.css';
import headshot from '../../assets/headshot.jpg';
import ucsb from '../../assets/ucsb.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';



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
              Hello Everyone! I am a fourth year Computer Science student at the University of California, Santa Barbara. I am pursuing a masters in Computer Science. Click the link below if you want to get to know me better!
            </div>
          </div>
          <div className={classes.links}>
            <a href="https://alanroddick.weebly.com" target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;