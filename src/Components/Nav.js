import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<nav>
			<ul>
				<li className='gratitude'>
					<Link to='/gratefuls'>gratitude</Link>
				</li>
				<li className='good-morning'>
					<Link to='/'>good morning</Link>
				</li>
				<li className='advice'>
					<Link to='/advice'>advice</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
