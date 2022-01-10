import { useState, useEffect } from 'react';

function Advice(props) {
	const url = `https://api.adviceslip.com/advice`;
	const [advice, setAdvice] = useState(null);
	// Esin helped with trouble-shooting the error message
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setAdvice(res);
			})
			.catch((err) => setError(true));
	}, []);

	if (!advice && !error) {
		return (
			<div className='advice-container'>
				<p className='advice-quote'>Loading...</p>
			</div>
		);
	}

	if (error && !advice) {
		return (
			<div className='advice-container'>
				<p className='advice-quote'>
					"Sometimes it's best to ignore other people's advice."
				</p>
			</div>
		);
	}

	return (
		<div className='advice-container'>
			<p className='advice-quote'>{`"${advice.slip.advice}"`}</p>
		</div>
	);
}

export default Advice;
