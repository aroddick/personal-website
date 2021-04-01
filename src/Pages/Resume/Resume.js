import classes from './Resume.module.css';
import React from 'react';

const Resume = () => {
  return (
    <div className={classes.column}>
      <div className={classes.row}>
        Education
        <div>
          <div>
            <h3>University of California, Santa Barbara</h3>
            <p>B.S. Computer Science</p>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        Work
        <div>

        </div>
      </div>
    </div>
  )
}

export default Resume;