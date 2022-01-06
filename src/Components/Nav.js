import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/gratefuls'>gratitude</Link>
				</li>
				<li>
					<Link to='/'>good morning</Link>
				</li>
				<li>
					<Link to='/advice'>advice</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
