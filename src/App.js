import { Routes, Route, Link } from 'react-router-dom';

import Nav from './Components/Nav';
import GoodMorning from './Components/GoodMorning';
// import Advice from './Components/Advice';
// import BackUpAdvice from './BackUpComponent/BackUpAdvice';
import Gratefuls from './Components/Gratefuls/Gratefuls';

function App() {
	return (
		<>
			<header>
				<h1>morning ritual</h1>
				<Nav />
			</header>
			<GoodMorning />
			{/* <Advice />
			<BackUpAdvice /> */}
			<Gratefuls />
		</>
	);
}

export default App;
