import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import WifiIndicator from "../components/wifi";
import Indicator from '../components/indicator'

const Temperature = () => {

	const series = [67];

	return (
		<>
			<Typography variant='h3' sx={{ mb: 8 }} > Temperature </Typography>
			<Card sx={{ mt: 4, width: 400 }}>
				<CardHeader title='Temperature management' />

				<CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', p: 4, gap: 2 }}>

					<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 2 }}>
						<Typography variant='body2' sx={{ fontWeight: 'bold' }}> 11:40:00 </Typography>
						<Box sx={{ display: 'flex', flexDirection: 'flex-col' }}>
							<Typography variant='body2'> rev </Typography>
							<Typography variant='body2' sx={{ ml: 1, fontWeight: 'bold' }}> 01.02.02 </Typography>
						</Box>
						<Typography sx={{ fontWeight: 'bold' }} variant='body2' color='success'> System updated </Typography>
					</Box>

					<WifiIndicator indicator={6} />
					<Indicator series={series} />


				  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: 2, mt: 2, width : '100%' }}>
						<Typography variant='body2' > Temperature probe 1 </Typography>
						<Typography variant='body2' sx={{ ml: 1, fontWeight: 'bold' }}> 25.5 </Typography>
					</Box>
				  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: 2, mt: 2, width : '100%' }}>
						<Typography variant='body2' > Temperature probe 2 </Typography>
						<Typography variant='body2' sx={{ ml: 1, fontWeight: 'bold' }}> 24.5 </Typography>
					</Box>
				</CardContent>
			</Card>

		</>)
}

export default Temperature;
