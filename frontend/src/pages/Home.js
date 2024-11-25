import { Box, CardContent, CardHeader, TextField } from '@mui/material';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'

const Home = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

			<Card >
				<CardContent >
					<CardHeader title='Get In!' titleTypographyProps={{
						align: 'center', variant: "h4",
						fontWeight: "bold"
					}} />
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, m: 4 }}>

						<TextField placeholder='Name' fullWidth size='small' />
						<TextField placeholder='password' type='password' fullWidth size='small' />
						<Button fullWidth variant="contained"> Login </Button>
					</Box>
				</CardContent>
			</ Card>

		</Box>
	)

}

export default Home;
