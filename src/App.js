import { Routes, Route, Link } from 'react-router-dom';

import Nav from './Components/Nav';
import GoodMorning from './Components/GoodMorning';
import Advice from './Components/Advice';
import Gratefuls from './Components/Gratefuls/Gratefuls';

function App() {
	return (
		<div>
			<Nav />
			<GoodMorning />
		</div>
	);
}

export default App;
