import './App.css';

import { Routes, Route } from 'react-router';
import { Box, Typography } from '@mui/material'
import Home from './pages/Home';
import MainLayout from './layout/mainLayout';
import Temperature from './pages/Temperature';
import Doso from './pages/Doso';
import Settings from './pages/Settings';
import Alarms from './pages/Alarms';
import PH from './pages/pH';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({

	typography: {
		fontFamily: "'Roboto', sans-serif",
		h6: {
			fontWeight: 600,
		},
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiInputLabel-root': {
						fontSize: 16

					},
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: '#1976d2',
							borderWidth: 2,
							backgroundColor: 'white'
						},
						'&:hover fieldset': {
							borderColor: '#1565c0',
						},

					},
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'white',
					borderBottom: '1px solid #ccc',
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					boxShadow: 'none',
				  border: '1px solid #ccc',
				  borderTop : 0
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 0,
					boxShadow: 'none',
					borderWidth: 2,
					textTransform: 'none',
				},
			},
		},




	},
});


const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<MainLayout />}>
					<Route path='/temperature' element={<Temperature />} />
					<Route path='/doso' element={<Doso />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/alarms' element={<Alarms />} />
					<Route path='/ph' element={<PH />} />
				</Route>
			</Routes>

		</ThemeProvider>
	);
}

export default App;
