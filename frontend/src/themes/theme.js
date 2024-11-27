import React, { createContext, useState, useContext, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import { blue, red, cyan, grey } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material';

const ThemeContext = createContext();

export const useThemeContext = () => {
	return useContext(ThemeContext);
};

const getPreferredTheme = () => {
	const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return isDarkMode ? 'dark' : 'light';
};

export const ThemeProviderComponent = ({ children }) => {
	const [mode, setMode] = useState(getPreferredTheme());


	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (e) => {
			setMode(e.matches ? 'dark' : 'light');
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	const toggleTheme = () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

	};

	console.log("MODE: ", mode)


	const theme = createTheme({
		shape: {
			borderRadius: 20,
		},
		palette: {
			mode: mode,
			primary: {
				light: blue[400],
				main: blue[500],
				dark: blue[700],
				contrastText: '#fff',
			},
			secondary: {
				light: red[300],
				main: red[500],
				dark: red[700],
				contrastText: '#000',
			},
			background: {
				default: mode === 'dark' ? '#212121' : '#f9fafb',
				paper: mode === 'dark' ? '#303030' : '#fff',
			},
			text: {
				primary: mode === 'dark' ? '#fff' : '#000',
				secondary: mode === 'dark' ? '#ddd' : '#555',
			},

		},
		typography: {
			fontFamily: "'Plus Jakarta Sans', sans-serif",
			h6: {
				fontWeight: 600,
			},
			body1: {
				fontSize: '1rem',
				lineHeight: 1.5,
			},
			button: {
				textTransform: 'none',
			},
		},

		components: {
			MuiTextField: {
				styleOverrides: {
					root: {
						'& .MuiInputLabel-root': {
							fontSize: 16,
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: '#1976d2',
								borderWidth: 2,
								backgroundColor: 'white',
							},
							'&:hover fieldset': {
								borderColor: '#1565c0',
							},
						},
					},
				},
			},
			MuiDrawer: {
				styleOverrides: {
					root: {
					  backgroundColor: 'transparent',
					},
					paper: {
					  backgroundColor: (theme) => theme.palette.background.paper,
						border: mode === 'dark' ? 'none' : `1px solid ${grey[300]}`,
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						backgroundColor: (theme) => theme.palette.background.paper,
						boxShadow: 'none',
						border: mode === 'dark' ? 'none' : `1px solid ${grey[300]}`,
						'& .MuiCardHeader-root': {
						  background: blue[300],
							fontWeight: 'bold',
						  variant: "h4",
						},
					},
				},
			},
			MuiCardHeader: {
				styleOverrides: {
					title: {
						textAlign: 'center', 
						fontWeight: 'bold', 
						fontSize: '1.5rem', 
					  color : 'white',
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						background: `linear-gradient(45deg, ${blue[200]} 30%, ${blue[800]} 90%)`,
						color: '#fff',
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {

						boxShadow: 'none',
						borderWidth: 2,
						textTransform: 'none',
						background: `linear-gradient(45deg, ${blue[200]} 30%, ${blue[800]} 90%)`,
						color: '#fff',
						'&:hover': {
							backgroundColor: (theme) => theme.palette.primary.dark,
						},
					},
				},
			},
		},


	});

	return (
		<ThemeContext.Provider value={{ mode, toggleTheme }}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
