import React from 'react';
import Styles from './styles.module.scss';
import telahance from '/assets/telahance.png';
import gauchotime from '/assets/gauchotime.png';

const Projects = () => {

  const telahanceGithub = 'https://github.com/aroddick/TeladocCapstone'
  const gauchotimeGithub = 'https://github.com/aroddick/cs48-wewritecode'

  return (
    <div className={'section ' + Styles.section} id='projects'>
      <div className={Styles.container}>
        <h1>Projects</h1>
        <div className={Styles.row}>
          <div className={Styles.project}>
            <div>
              <div className={Styles.overlay}>
                <h2>Telahance</h2>
                <a href={telahanceGithub} target="_blank" rel="noreferrer">
                  <button>
                    View
                  </button>
                </a>
                <p className={Styles.description}>Senior Capstone project. Won second place.</p>
                
              </div>
              <img className={Styles.picture} src={telahance} alt="TelaHance Project"></img>
            </div>

          </div>
          <div className={Styles.project}>
            <div>
              <div className={Styles.overlay}>
                <h2>GauchoTime</h2>
                <a href={gauchotimeGithub} target="_blank" rel="noreferrer">
                  <button>
                    View
                  </button>
                </a>
                <p className={Styles.description}>School group project</p>
              </div>
              <img className={Styles.picture} src={gauchotime} alt='GauchoTime Project'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;