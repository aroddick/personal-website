import { h } from 'preact';
import Styles from './styles.module.scss';
// import { Link } from 'preact-router/match';

function Nav() {
  return (
    <nav id="header" className={Styles.container}>
      <div className={Styles.links}>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#resume'>Resume</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  );
}
export default Nav;
