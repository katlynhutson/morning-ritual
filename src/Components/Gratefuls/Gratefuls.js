import Form from './Form';
import List from './List';
import { useState } from 'react';

function Gratefuls(props) {
	const [gratefuls, setGratefuls] = useState([]);
	return (
		<div>
			<h2>Gratefuls</h2>
			<h3>Instructions: List 10 reasons you are grateful today.</h3>
			<p>Your reason can be as small as a fresh pair of socks!</p>
			<Form gratefuls={gratefuls} setGratefuls={setGratefuls} />
			<List gratefuls={gratefuls} />
		</div>
	);
}

export default Gratefuls;
