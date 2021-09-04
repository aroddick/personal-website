import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slideshow = ({ show, handleClose, data }) => {
	return (
		<Modal show={show} onHide={handleClose} centered={true} size="xl">
			<Modal.Header closeButton>
				<Modal.Title>
					<div>
						<a href={data.link} target="_blank" className='btn btn-primary' rel='noreferrer'>
							View Project
						</a>
					</div>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Carousel variant="dark" interval={null}>
					{data.images.map(image =>
					(<Carousel.Item>
						<img
							className="d-block w-100"
							src={image}
							alt="Project Image"
						/>
					</Carousel.Item>))}
				</Carousel>
			</Modal.Body>
		</Modal>

		// <div className={classes.container}>
		// 	<button onClick={handleClose}>
		// 		<FontAwesomeIcon icon={faTimes} color="red"/>
		// 	</button>
		// 	<Carousel variant="dark" interval={null}>
		// 		{images.map(image =>
		// 		(<Carousel.Item>
		// 			<img
		// 				className="d-block w-100"
		// 				src={image}
		// 			/>
		// 		</Carousel.Item>))}
		// 	</Carousel>
		// </div>

	)
}

export default Slideshow;