import React, { useState, useEffect } from "react";
import { View, Dimensions, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

const MyChartKitChart = () => {
	const fullData = [50, 10, 40, 54, 85, 30, 79, 64, 40, 45, 68, 30];
	const [displayData, setDisplayData] = useState([fullData[0]]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (displayData.length < fullData.length) {
				setDisplayData((prevData) => [...prevData, fullData[prevData.length]]);
			}
		}, 0.1); // 500ms delay between adding data points

		return () => clearInterval(interval); // Clean up on component unmount
	}, [displayData]);

	return (
		<View style={{ paddingTop: 100 }}>
			<Text
				style={{
					marginBottom: 20,
					color: "#fff",
					fontFamily: "Onest",
					fontSize: 16,
					fontWeight: "bold",
				}}
			>
				Spend Dynamics
			</Text>
			<LineChart
				withDots={true}
				data={{
					labels: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec",
					],
					datasets: [{ data: displayData }],
				}}
				width={Dimensions.get("window").width - 16}
				height={250}
				chartConfig={{
					backgroundColor: "transparent",
					backgroundGradientFrom: "#DA80BD",
					backgroundGradientTo: "transparent",
					fillShadowGradient: "#DA80BD",
					fillShadowGradientOpacity: 1,
					decimalPlaces: 2,
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16,
					},
					propsForDots: {
						r: "0",
						strokeWidth: "2",
						stroke: "#ffa726",
					},
				}}
				bezier
				style={{
					marginVertical: 8,
					borderRadius: 16,
					backgroundColor: "transparent",
				}}
			/>
		</View>
	);
};

export default MyChartKitChart;

// [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
// ]

// [50, 10, 40, 54, 85, 30, 79, 64, 40, 45, 68, 30]
