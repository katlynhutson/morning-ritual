import Form from './Form';
import List from './List';

function Gratefuls(props) {
	return (
		<div className='list-bg'>
			<div className='gratitude-list'>
				<Form gratefuls={props.gratefuls} setGratefuls={props.setGratefuls} />
				<List gratefuls={props.gratefuls} />
			</div>
		</div>
	);
}

export default Gratefuls;
