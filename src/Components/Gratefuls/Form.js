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
			<input type='text' onChange={handleChange} value={newGrateful} />
			<input type='submit' value='Add Grateful' />
		</form>
	);
}

export default Form;
