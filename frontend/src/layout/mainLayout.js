import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TemperatureIcon from '@mui/icons-material/AcUnit';
import PhIcon from '@mui/icons-material/LocalDrink';
import DosageIcon from '@mui/icons-material/LocalPharmacy';
import AlarmIcon from '@mui/icons-material/Alarm';
import SettingsIcon from '@mui/icons-material/Settings';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import WifiIcon from '@mui/icons-material/Wifi';
import { Outlet } from 'react-router';
import { Avatar } from '@mui/material';


const drawerWidth = 240;

const menuItems = [
	{ name: 'Temperature', icon: <TemperatureIcon /> },
	{ name: 'pH', icon: <PhIcon /> },
	{ name: 'Doso', icon: <DosageIcon /> },
	{ name: 'Alarms', icon: <AlarmIcon /> },
	{ name: 'Settings', icon: <SettingsIcon /> }
];

function ResponsiveDrawer(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	const drawer = (
		<div>
		  <List sx={{mt : 4}}>
				{menuItems.map((elem, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{elem.icon}
							</ListItemIcon>
							<ListItemText primary={elem.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	);


	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<WifiIcon />
				</Toolbar>
			</AppBar>
			<Box
				component="nav"

				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
					  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  },
					}}
					open
				>
				  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt : 2  }}>
						<Avatar src='/logo.png' sx={{ height: 90, width: 90 }} />
					</ Box>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
			>
				<Toolbar />
				<Outlet />
			</Box>
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	window: PropTypes.func,
};

export default ResponsiveDrawer;
