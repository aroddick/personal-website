import classes from './Projects.module.css';
import React, { useState } from 'react';
import Slideshow from './Slideshow.js';
import telahance from '../../assets/telahance.png';
import gauchotime from '../../assets/gauchotime.png';
import telahance1 from '../../assets/telahance/telahance-1.png';
import telahance2 from '../../assets/telahance/telahance-2.png';
import telahance3 from '../../assets/telahance/telahance-3.png';
import telahance4 from '../../assets/telahance/telahance-4.png';
import telahance5 from '../../assets/telahance/telahance-5.png';
import telahance6 from '../../assets/telahance/telahance-6.png';
import telahance7 from '../../assets/telahance/telahance-7.png';
import telahance8 from '../../assets/telahance/telahance-8.png';
import telahance9 from '../../assets/telahance/telahance-9.png';
import gauchotime1 from '../../assets/gauchotime/gauchotime-1.png'
import gauchotime2 from '../../assets/gauchotime/gauchotime-2.png'
import gauchotime3 from '../../assets/gauchotime/gauchotime-3.png'
import gauchotime4 from '../../assets/gauchotime/gauchotime-4.png'

const Projects = () => {

	function renderModal(project) {
		setShow(true);
		setData(data[project]);
	}

	const [show, setShow] = useState(false);

	const telahanceImgs = [
		telahance1,
		telahance2,
		telahance3,
		telahance4,
		telahance5,
		telahance6,
		telahance7,
		telahance8,
		telahance9
	]
	const gauchotimeImgs = [
		gauchotime1,
		gauchotime2,
		gauchotime3,
		gauchotime4
	]
	const telahanceGithub = 'https://github.com/aroddick/TeladocCapstone'
	const gauchotimeGithub = 'https://github.com/aroddick/cs48-wewritecode'
	const data = {
		'telahance': {
			'images': telahanceImgs,
			'link': telahanceGithub
		},
		'gauchotime': {
			'images': gauchotimeImgs,
			'link': gauchotimeGithub
		}
	};

	const [currentData, setData] = useState();

	return (
		<div className={'section ' + classes.section} id='projects'>
			{show &&
				(<Slideshow className='bootstrap'
					show={show}
					handleClose={() => setShow(false)}
					data={currentData}
				/>)}
			<div className={classes.container}>
				<h1>Projects</h1>
				<div className={classes.row}>
					<div className={classes.project}>
						<div>
							<img className={classes.picture} src={telahance}></img>
							<div className={classes.overlay}>
								<h2>Telahance</h2>
								<button className={classes.viewProject} onClick={() => renderModal('telahance')}>View</button>
								<p className={classes.description}>Senior Capstone project. Won second place.</p>
							</div>
						</div>

					</div>
					<div className={classes.project}>
						<div>
							<img className={classes.picture} src={gauchotime}></img>
							<div className={classes.overlay}>
								<h2>GauchoTime</h2>
								<button className={classes.viewProject} onClick={() => renderModal('gauchotime')}>View</button>
								<p className={classes.description}>School group project</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects;