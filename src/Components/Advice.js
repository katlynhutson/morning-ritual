import { useState, useEffect } from 'react';

function Advice(props) {
	const url = `https://api.adviceslip.com/advice`;
	const [advice, setAdvice] = useState(null);

	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setAdvice(res);
				setError(false);
			})
			.catch(setError(true));
	}, []);

	if (!advice) {
		return <p className='advice-quote'>Loading...</p>;
	}

	if (error === true) {
		return (
			<p className='advice-quote'>
				"Sometimes it's best to ignore other people's advice."
			</p>
		);
	}

	return (
		<div className='advice-container'>
			<p className='advice-quote'>{`"${advice.slip.advice}"`}</p>
		</div>
	);
}

export default Advice;
