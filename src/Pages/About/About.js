import React from 'react';
import classes from './About.module.css';
import headshot from '../../assets/headshot.jpg';
import ucsb from '../../assets/ucsb.jpeg';
import guitar from '../../assets/guitar.JPG';

const About = () => {
  return (
    <div>
      <div className={classes.imageContainer}>
      <img className={classes.hero} src={ucsb}></img>
      </div>
      <div className={classes.container}>
        <div className={classes.content}>
          <img width='300' src={headshot}></img>
          <div className={classes.description}>
            Hello Everyone! I am a fourth year Computer Science student at the University of California, Santa Barbara. I am pursuing a masters in Computer Science.
          </div>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.row}>
          <p>I've been playing guitar for about 10 years. It is one of my favorite things to do when I am stressed.</p>
          <img src={guitar} width="50%"></img>
        </div>
      </div>

    </div>
  )
}

export default About;