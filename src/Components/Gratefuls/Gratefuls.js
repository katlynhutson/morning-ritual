import Form from './Form';
import List from './List';

function Gratefuls(props) {
	return (
		<div className='gratitude-list'>
			<Form gratefuls={props.gratefuls} setGratefuls={props.setGratefuls} />
			<List gratefuls={props.gratefuls} />
		</div>
	);
}

export default Gratefuls;

// I referenced the to do list react lab while making this component
