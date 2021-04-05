import classes from './Resume.module.css';
import React from 'react';

const Resume = () => {
  return (
    <div id='resume'>
      <div className={classes.row}>
        <h2>Education</h2>
        <div className={classes.column}>
          <h3>University of California, Santa Barbara</h3>
          <p>B.S. Computer Science</p>
          <p></p>
        </div>
      </div>
      <div className={classes.row}>
        <h2>Work</h2>
        <div className={classes.column}>
          <h3>University of California, Santa Barbara</h3>
          <p>Undergraduate Learning Assistant</p>

        </div>
      </div>
    </div>
  )
}

export default Resume;