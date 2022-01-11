function Mindfulness(props) {
	return (
		<div className='mindfull-box'>
			<div className='mindful-area'>
				<label htmlFor='mindfulness'>I am feeling ...</label>
				<textarea
					name='mindfulnes'
					id='mindfulness'
					className='mindful-textbox'
					maxLength='2000'
				/>
			</div>
		</div>
	);
}

export default Mindfulness;
