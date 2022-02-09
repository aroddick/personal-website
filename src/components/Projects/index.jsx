import React from 'react';
import Styles from './styles.module.scss';
import telahance from '/assets/telahance.png';
import distributed from '/assets/distributed-banking.jpeg';
import ml from '/assets/neural-net.png';
import ddough from '/assets/ddough.jpeg';
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
          <div className={Styles.column}>
            <Project
              name="TelaHance"
              description="Intelligent Telemedicine Web Application"
              image={telahance}
              link={telahanceGithub}
            />
          </div>
          <div className={Styles.column}>
            <Project
              name="Fraud Detection"
              description="Graph Neural Network Model"
              image={ml}
              link={null}
            />
          </div>
          <div className={Styles.column}>
            <Project
              name="DDough Doughnut Shop"
              description="Scalable Web Application"
              image={ddough}
              link={null}
            />
          </div>
          <div className={Styles.column}>
            <Project
              name="Distributed Banking"
              description="Distributed Application Built On Blockchain and Raft"
              image={distributed}
              link={null}
            />
          </div>
          <div className={Styles.column}>
            <Project
              name="GauchoTime"
              description="UCSB Course Scheduling Web Application"
              image={gauchotime}
              link={gauchotimeGithub}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;