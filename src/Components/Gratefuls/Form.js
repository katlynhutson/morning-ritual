import { useContext, useState } from 'react';

import { GratefulContext } from '../../GratefulContext';

export default function Form(props) {
	const [newGrateful, setNewGrateful] = useState('');
	const { gratefuls, setGratefuls } = useContext(GratefulContext);
	function handleChange(event) {
		setNewGrateful(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const tempGratefuls = [...gratefuls];
		tempGratefuls.push(newGrateful);
		setGratefuls(tempGratefuls);
		setNewGrateful('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='gratefuls'>I am grateful for ...</label>
			<input
				type='text'
				onChange={handleChange}
				value={newGrateful}
				id='gratefuls'
				className='textbox'
			/>

			<input type='submit' value='+' className='button' />
		</form>
	);
}

// I referenced the to do list react lab while making this component
