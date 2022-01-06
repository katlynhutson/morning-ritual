import { useState, useEffect } from 'react';

function Advice(props) {
	const url = `https://api.adviceslip.com/advice`;
	const [advice, setAdvice] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setAdvice(res);
			})
			.catch(console.error);
	}, []);

	if (!advice) {
		return <p>Be patient! I'm thinking...</p>;
	}

	return (
		<div className='advice-container'>
			<p className='advice-quote'>{`"${advice.slip.advice}"`}</p>
		</div>
	);
}

export default Advice;
