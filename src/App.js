import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './Style/header.css';
import './Style/good-morning.css';
import './Style/advice.css';
import './Style/gratitude.css';
import './Style/mindful.css';
import './Style/about.css';

import Nav from './Components/Nav';
import GoodMorning from './Components/GoodMorning';
import Advice from './Components/Advice';
// import BackUpAdvice from './BackUpComponent/BackUpAdvice';
import Gratefuls from './Components/Gratefuls/Gratefuls';
import Mindfulness from './Components/Mindfulness';
import About from './Components/About';

import { GratefulContext } from './GratefulContext';

export default function App() {
	// Julio and Tyler advised me to lift state to store gratitude list -- Esin and Tyler suggested using Context to avoid props drilling

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
						<GratefulContext.Provider value={{ gratefuls, setGratefuls }}>
							<Gratefuls />
						</GratefulContext.Provider>
					}
				/>
				<Route path='/mindfulness' element={<Mindfulness />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</>
	);
}
