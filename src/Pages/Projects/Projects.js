import classes from './Projects.module.css';
import React from 'react';
import guitar from '../../assets/guitar.JPG';
import osu from '../../assets/osu.jpeg';
// import classes from './Home.module.css';

const Projects = () => {
  return (
    <div className='section' id='projects'>
      <h1>Projects</h1>
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
  )
}

export default Projects;