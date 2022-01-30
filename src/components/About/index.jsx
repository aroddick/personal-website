import React from 'react';
import Styles from './styles.module.scss';
import headshot from '/assets/headshot.jpg';
import ucsb from '/assets/ucsb.jpeg';



const About = () => {
  return (
    <div id='about' className='section'>
      <div className={Styles.header}>
        <div className={Styles.imageContainer}>
          <img className={Styles.hero} src={ucsb} alt='UCSB'></img>
        </div>
        <div className={Styles.container}>
          <div className={Styles.row}>
            <img className={Styles.profile} width='300' src={headshot} alt='headshot'></img>
            <div className={Styles.introduction}>
              Hello Everyone! I am pursuing a Master's in Computer Science at the University of California, Santa Barbara. I am working in the SecLab and my interests currently lie in applying machine learning to security problems.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;