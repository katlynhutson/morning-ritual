import { useState } from 'react';

function Form(props) {
	const [newGrateful, setNewGrateful] = useState('');
	function handleChange(event) {
		setNewGrateful(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const tempGratefuls = [...props.gratefuls];
		tempGratefuls.push(newGrateful);
		props.setGratefuls(tempGratefuls);
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

export default Form;
