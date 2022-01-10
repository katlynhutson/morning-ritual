function List(props) {
	return (
		<ul>
			{props.gratefuls.map((ele, i) => {
				return <li key={i}>{ele}</li>;
			})}
		</ul>
	);
}

export default List;

// I referenced the to do list react lab while making this component
