import { h } from 'preact';
import Styles from './styles.module.scss';
import telahance from '../../../public/assets/telahance.png';
import gauchotime from '../../../public/assets/gauchotime.png';

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
              <img className={Styles.picture} src={telahance} alt="TelaHance Project"></img>
              <div className={Styles.overlay}>
                <h2>Telahance</h2>
                <a href={telahanceGithub} target="_blank" rel="noreferrer">
                  <button className={Styles.viewProject}>
                    View
                  </button>
                </a>
                <p className={Styles.description}>Senior Capstone project. Won second place.</p>
              </div>
            </div>

          </div>
          <div className={Styles.project}>
            <div>
              <img className={Styles.picture} src={gauchotime} alt='GauchoTime Project'></img>
              <div className={Styles.overlay}>
                <h2>GauchoTime</h2>
                <a href={gauchotimeGithub} target="_blank" rel="noreferrer">
                  <button className={Styles.viewProject}>
                    View
                  </button>
                </a>
                <p className={Styles.description}>School group project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;