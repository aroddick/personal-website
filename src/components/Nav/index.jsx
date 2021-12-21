import { h } from 'preact';
import { useState } from 'preact/hooks';
import Styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Nav() {
  const [visible, setVisible] = useState(false);
  function toggleLinks() {
    visible ? setVisible(false) : setVisible(true);
  }
  return (
    <nav id="header" className={Styles.container}>
      <div className={visible ?  Styles.links + " " + Styles.responsive : Styles.links}>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#resume'>Resume</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
        <button className={Styles.icon} onClick={() => toggleLinks()}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}
export default Nav;
