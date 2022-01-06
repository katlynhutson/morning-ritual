import { Routes, Route } from 'react-router-dom';

import Nav from './Components/Nav';

import GoodMorning from './Components/GoodMorning';
// import Advice from './Components/Advice';
import BackUpAdvice from './BackUpComponent/BackUpAdvice';
import Gratefuls from './Components/Gratefuls/Gratefuls';

function App() {
	return (
		<>
			<header>
				<h1 className='title'>morning ritual</h1>
				<Nav />
			</header>
			<Routes>
				<Route path='/' element={<GoodMorning />} />
				{/* <Route path='/advice' element={<Advice />} /> */}
				<Route path='/advice' element={<BackUpAdvice />} />
				<Route path='/gratefuls' element={<Gratefuls />} />
			</Routes>
		</>
	);
}

export default App;
