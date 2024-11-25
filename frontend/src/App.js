import './App.css';

import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import MainLayout from './layout/mainLayout';
import Temperature from './pages/Temperature';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<MainLayout />}>
				  <Route path='/temperature' element={<Temperature />} />
				</Route>


			</Routes>
		</>
	);
}

export default App;
