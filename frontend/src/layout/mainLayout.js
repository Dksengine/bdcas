import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router';
import { Avatar } from '@mui/material';
import { Link } from 'react-router'
import { menuItems } from '../navigation/menuItems'
import AccountMenu from '../components/dropDown'
import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth = 240;



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
			<List sx={{ mt: 4 }}>
				{menuItems.map((elem, index) => (
					<Link style={{ textDecoration: 'none', color: 'inherit' }} key={index} to={elem.path}>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon >
									{elem.icon}
								</ListItemIcon>
								<ListItemText primary={elem.name} />
							</ListItemButton>
						</ListItem>
					</Link>
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
					boxShadow: 0,
				}}
			>
				<Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }} elevation={0}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Avatar  sx={{ width: 32, height: 32}} >
						<NotificationsIcon  />
					</Avatar>
					<AccountMenu />
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>

				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
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
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					open
				>
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
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
				<Box
					sx={{
						position: 'fixed',
						bottom: 0,
						left: 0,
						right: 0,
						textAlign: 'center',
						padding: '10px 0',
					}}
				>
					<Typography variant="body2">
						© {new Date().getFullYear()} Blue Dolphin Computer Aquarium System. All rights reserved.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * Remove this when copying and pasting into your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;


