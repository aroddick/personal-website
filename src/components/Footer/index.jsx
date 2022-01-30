import React from 'react';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Alan Roddick
    </footer>
  );
}
export default Footer;
