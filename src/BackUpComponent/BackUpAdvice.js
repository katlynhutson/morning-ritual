import adviceData from './data/advice-data.json';

function BackUpAdvice(props) {
	const random = Math.floor(Math.random() * (adviceData.length - 1));

	return (
		<div className='advice-container'>
			<p className='advice-quote'>{`"${adviceData[random].slip.advice}"`}</p>
		</div>
	);
}

export default BackUpAdvice;
