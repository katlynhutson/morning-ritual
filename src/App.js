import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './Style/header.css';
import './Style/good-morning.css';
import './Style/advice.css';
import './Style/gratitude.css';

import Nav from './Components/Nav';
import GoodMorning from './Components/GoodMorning';
import Advice from './Components/Advice';
// import BackUpAdvice from './BackUpComponent/BackUpAdvice';
import Gratefuls from './Components/Gratefuls/Gratefuls';

function App() {
	// Julio and Tyler advised me to lift state to store gratitude list
	const [gratefuls, setGratefuls] = useState([]);
	return (
		<>
			<header>
				<h1 className='title'>morning ritual</h1>
				<Nav />
			</header>

			<Routes>
				<Route path='/' element={<GoodMorning />} />
				<Route path='/advice' element={<Advice />} />
				{/* <Route path='/advice' element={<BackUpAdvice />} /> */}
				<Route
					path='/gratefuls'
					element={
						<Gratefuls gratefuls={gratefuls} setGratefuls={setGratefuls} />
					}
				/>
			</Routes>
		</>
	);
}

export default App;
