import React from 'react';
import Styles from './styles.module.scss';
import ucsb from '/assets/ucsb-resume.png';
import ebay from '/assets/ebay.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div id='resume' className={'section ' + Styles.section}>
      <h1>Education</h1>
      <div className={Styles.list}>
        <div className={Styles.row}>
          <img src={ucsb} width={150} alt="UCSB logo"></img>
          <div className={Styles.description}>
            <h2>University of California, Santa Barbara</h2>
            <div className={Styles.item}>
              <div className={Styles.row}>
                <p>Masters of Science in Computer Science</p>
                <p>Expected: June 2022</p>
              </div>
              <b>GPA: 4.0</b>
            </div>
            <div className={Styles.item}>
              <div className={Styles.row}>
                <p>Bachelor of Science in Computer Science</p>
                <p>June 2021</p>
              </div>
              <b>Major GPA: 3.76</b>
              <p>Notable Accomplishments</p>
              <ul>
                <li>Dean's Honors: Winter 2019 - Winter 2021</li>
                <li>Distinction in the major</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <h1>Work Experience</h1>
      <div className={Styles.list}>
        <div className={Styles.row}>
          <img src={ucsb} width={150} alt="UCSB logo"></img>
          <div className={Styles.description}>
            <div className={Styles.row}>
              <h2>Teaching Assistant</h2>
              <p>September 2021 - Present</p>
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsisH} color={'rgba(254,188,17,0.7)'} style={{ margin: "auto", display: "block", width: "3rem" }} />
        <div className={Styles.row}>
          <img src={ebay} width={150} alt="eBay logo"></img>
          <div className={Styles.description}>
            <div className={Styles.row}>
              <h2>Software Engineering Intern</h2>
              <p>June 2021 - September 2021</p>
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsisH} color={'rgba(254,188,17,0.7)'} style={{ margin: "auto", display: "block", width: "3rem" }} />
        <div className={Styles.row}>
          <img src={ucsb} width={150} alt="UCSB logo"></img>
          <div className={Styles.description}>
            <div className={Styles.row}>
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
        <FontAwesomeIcon icon={faEllipsisH} color={'rgba(254,188,17,0.7)'} style={{ margin: "auto", display: "block", width: "3rem" }} />
        <div className={Styles.row}>
          <img src={ebay} width={150} alt="eBay logo"></img>
          <div className={Styles.description}>
            <div className={Styles.row}>
              <h2>Software Engineering Intern</h2>
              <p>June 2020 - September 2020</p>
            </div>
            <ul>
              <li>Developed an API to enhance inventory curation by aggregating 10 metrics for a given item</li>
              <li>Designed a modal on frontend to showcase metrics in tables, charts, and graphs</li>
              <li>Collaborated with 3 other teams to supplement additional data to service</li>
              <li>Researched a way to incorporate image quality recognition on site</li>
            </ul>
          </div>
        </div>

      </div>
      <h1>Skills</h1>
      <div className={Styles.row + ' ' + Styles.skills}>
        <div>
          <h2>Languages</h2>
          <ul>
            <li>C/C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Scala</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <h2>Libraries/Frameworks/Tools</h2>
          <ul>
            <li>React</li>
            <li>Vue</li>
            <li>Spring</li>
            <li>AWS</li>
            <li>scikit-learn</li>
            <li>PyTorch</li>
            <li>Keras</li>
            <li>Unix Shell</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Resume;