import { Box, Typography } from '@mui/material'

const getSignalLevel = (downlink) => {
	if (downlink >= 10) return { val: 5, col: "#4caf50", signal: "Excellent" };
	if (downlink >= 6) return { val: 4, col: "#8bc34a", signal: "Good" };
	if (downlink >= 4) return { val: 3, col: "#8bc34a", signal: "Fair" };
	if (downlink >= 2) return { val: 2, col: "#ffc107", signal: "Poor" };
	if (downlink > 0) return { val: 1, col: "#f44336", signal: "Very Poor" };
	return { val: 0, col: "#9e9e9e", signal: "No Signal" };
};



const WifiIndicator = ({ indicator }) => {
	const i = getSignalLevel(indicator)

	return (
		<div style={styles.container}>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography variant='body2'>Wifi Indicator :  </Typography> <Typography sx={{ fontWeight: '700' }}>{i.signal} </Typography>
			</Box>
			<div style={styles.wifi}>
				{[1, 2, 3, 4, 5].map((level) => (
					<div
						key={level}
						style={{
							...styles.bar,
							backgroundColor: level <= i.val ? i.col : "#f4f4f4",
							height: `${level * 10}px`,
						}}
					/>
				))}
			</div>
		</div>
	);
};


const styles = {
	container: {
		textAlign: "center",
		fontFamily: "Arial, sans-serif",
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%'
	},
	wifi: {
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end",
		height: "50px",
		width: "80px",

	},
	bar: {
		width: "15px",
		margin: "0 2px",
		borderRadius: "2px",
		transition: "background-color 0.3s ease",
	},
	text: {
		marginTop: "10px",
		fontSize: "14px",
	},
};

export default WifiIndicator;
