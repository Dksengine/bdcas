import './App.css';

import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import MainLayout from './layout/mainLayout';
import Temperature from './pages/Temperature';
import Doso from './pages/Doso';
import Settings from './pages/Settings';
import Alarms from './pages/Alarms';
import PH from './pages/pH';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<MainLayout />}>
					<Route path='/temperature' element={<Temperature />} />
					<Route path='/doso' element={<Doso />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/alarms' element={<Alarms />} />
					<Route path='/ph' element={<PH />} />
				</Route>


			</Routes>
		</>
	);
}

export default App;
