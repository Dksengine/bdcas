import { Box, CardContent, Avatar, CardHeader, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import LoginIcon from '@mui/icons-material/Login';

const Home = () => {
	return (
		<Box sx={{ display: 'flex', height: '100vh' }}>
			<Box sx={{
				width: { xs: '0', sm: '50%' },
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<video
				  src="/aquarium.mp4"
					autoPlay
					loop
					muted
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						objectFit: 'cover', 
					}}
				/>


			</Box>

			<Box sx={{
				width: { xs: '100%', sm: '50%' },
				backgroundColor: 'white',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: "'Inter', sans-serif",
			}}>
				<Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
					<CardHeader
						title="Dive In!"
						titleTypographyProps={{
							align: 'center',
							variant: "h4",
							fontWeight: "bold",
						}}
					/>
					<CardContent>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mx: 4, justifyContent: 'center', alignItems: 'center' }}>
							<Avatar src='/logo.png' sx={{ width: 100, height: 100, backgroundColor: 'transparent' }} />
							<TextField label='name' fullWidth size='small' variant='standard' />
							<TextField label='password' type='password' fullWidth size='small' variant='standard' />
							<Button startIcon={<LoginIcon />} fullWidth variant="contained">Login</Button>
						</Box>
					</CardContent>
				</Card>
				<Box
					sx={{
						position: 'fixed',
						bottom: 0,
						textAlign: 'center',
						padding: '10px 0',
					}}
				>
					<Typography variant="body2">
						© {new Date().getFullYear()} Blue Dolphin Computer Aquarium System. All rights reserved.
					</Typography>
				</Box>
			</Box>
		</Box >
	);
}

export default Home;
