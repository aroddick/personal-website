import { h } from 'preact';
import Styles from './styles.module.scss';
import headshot from '../../../public/assets/headshot.jpg';
import ucsb from '../../../public/assets/ucsb.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';



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
              Hello Everyone! I am a fourth year Computer Science student at the University of California, Santa Barbara. I am pursuing a masters in Computer Science. Click the link below if you want to get to know me better!
            </div>
          </div>
          <div className={Styles.links}>
            <a href="https://alanroddick.weebly.com" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faExternalLinkAlt} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;