import { useContext } from 'react';

import { GratefulContext } from '../../GratefulContext';

function List(props) {
	const { gratefuls } = useContext(GratefulContext);
	return (
		<ul>
			{gratefuls.map((ele, i) => {
				return <li key={i}>{ele}</li>;
			})}
		</ul>
	);
}

export default List;

// I referenced the to do list react lab while making this component
