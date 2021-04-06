import classes from './Resume.module.css';
import React from 'react';
import ucsb from '../../assets/ucsb-resume.png';
import ebay from '../../assets/ebay.png';

const Resume = () => {
  return (
    <div id='resume' className={'section ' + classes.section}>
      <h1>Education</h1>
      <div className={classes.column}>
        <h2>University of California, Santa Barbara</h2>
        <div className={classes.row}>
          <p>Masters of Science in Computer Science</p>
          <p>Expected: June 2022</p>
        </div>
        <div className={classes.row}>
          <p>Bachelor of Science in Computer Science</p>
          <p>June 2021</p>
        </div>
      </div>
      <h1>Work Experience</h1>
      <div className={classes.column}>
        <div className={classes.row}>
          <img src={ucsb} width={150}></img>
          <div>
            <div className={classes.row}>
              <h2>Undergraduate Learning Assistant</h2>
              <p>September 2019 - March 2021</p>
            </div>
            <ul>
              <li>Supervise 60 students with object-oriented design and implementation in labs for 2 hours a week</li>
              <li>Collaborate with professor, TAs and tutors to discuss strategies for labs and homework 1 hour a week</li>
              <li>Host 2 Office Hours a week to improve student understanding of material</li>
              <li>Resolve student questions on an online forum for 2 hours a week</li>
            </ul>
          </div>


        </div>
        <div className={classes.row}>
          <img src={ebay} width={150}></img>
          <div>
            <div className={classes.row}>
              <h2>Software Engineering Intern</h2>
              <p>June 2020 - September 2020</p>
            </div>
            <ul>
              <li>Developed an API to enhance inventory curation by aggregating 10 metrics for a given item</li>
              <li>Designed a modal on frontend to showcase metrics in tables, charts, and graphs</li>
              <li>Collaborated with 3 other teams to supplement additional data to service</li>
              <li>Researched a way to incorporate image quality recognition on site</li>
            </ul></div>

        </div>

      </div>
    </div>
  )
}

export default Resume;