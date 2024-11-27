import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
	return (
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
	)
}

export default Footer;
