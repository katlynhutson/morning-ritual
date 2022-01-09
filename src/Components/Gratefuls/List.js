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
