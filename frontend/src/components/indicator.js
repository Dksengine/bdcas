import Chart from "react-apexcharts";

import { useTheme } from "@mui/material/styles";


const Indicator = ({ series }) => {
	const theme = useTheme();
	const options = {
		chart: {
			height: 280,
			type: "radialBar",

		},
		plotOptions: {
			radialBar: {
				startAngle: -90,
				endAngle: 90,
				track: {
					startAngle: -90,
					endAngle: 90,
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						fontSize: "30px",
						show: true,
						color: theme.palette.text.primary,
						fontFamily: theme.typography.fontFamily,
					},
				},
			},
		},
		labels: ["Progress"],
		colors: [theme.palette.primary.light],
	};

	return (<Chart
		options={options}
		series={series}
		type="radialBar"
		width='300'
	/>)
}

export default Indicator;
