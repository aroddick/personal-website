import React from 'react';
import Styles from './styles.module.scss';
import telahance from '/assets/telahance.png';
import gauchotime from '/assets/gauchotime.png';
import Project from '../Project/index';

const Projects = () => {

  const telahanceGithub = 'https://github.com/aroddick/TeladocCapstone'
  const gauchotimeGithub = 'https://github.com/aroddick/cs48-wewritecode'

  return (
    <div className={'section ' + Styles.section} id='projects'>
      <div className={Styles.container}>
        <h1>Projects</h1>
        <div className={Styles.row}>
          <Project
            name="TelaHance"
            description="Senior Capstone project. Won second place."
            image={telahance}
            github={telahanceGithub}
          />
          <Project
            name="GauchoTime"
            description="School group project"
            image={gauchotime}
            github={gauchotimeGithub}
          />
          {/* <Project
            name="GauchoTime"
            description="School group project"
            image={gauchotime}
            github={gauchotimeGithub}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Projects;