function List(props) {
	return (
		<ul>
			{props.gratefuls.map((ele, i) => {
				return <li key={i}>{`${i + 1}. ${ele}`}</li>;
			})}
		</ul>
	);
}

export default List;
