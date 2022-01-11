import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<nav>
			<ul>
				<li className='good-morning'>
					<Link to='/'>good morning</Link>
				</li>
				<li className='gratitude'>
					<Link to='/gratefuls'>gratitude</Link>
				</li>

				<li className='advice'>
					<Link to='/advice'>advice</Link>
				</li>
				<li className='minfulness'>
					<Link to='/mindfulness'>mindfulness</Link>
				</li>
				<li className='about'>
					<Link to='/about'>about</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
