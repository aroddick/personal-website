import React from 'react';
import Styles from './styles.module.scss';

const Project = ({ image, name, description, link }) => {
  return (
    <div className={Styles.project}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={Styles.overlay}>
          <div className={Styles.caption}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <img className={Styles.picture} src={image} alt={name}></img>
      </a>

    </div>
  )
}

export default Project;