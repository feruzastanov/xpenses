import React from "react";
import { PieChart } from "react-native-chart-kit";
import { Dimensions, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width - 16;

const chartConfig = {
	backgroundGradientFrom: "#1E2923",
	backgroundGradientFromOpacity: 0,
	backgroundGradientTo: "#08130D",
	backgroundGradientToOpacity: 0.5,
	color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
	strokeWidth: 2, // optional, default 3
	barPercentage: 0.5,
	useShadowColorFromDataset: false, // optional
};

const MyPieChart = () => {
	const data = [
		{
			name: `Groceries`,
			amount: 50,
			color: "#A68CB1",
			legendFontColor: "white",
			legendFontSize: 15,
		},
		{
			name: `Utilities`,
			amount: 30,
			color: "#6E759F",
			legendFontColor: "white",
			legendFontSize: 15,
		},
		{
			name: `Rent`,
			amount: 200,
			color: "#4A538E",
			legendFontColor: "white",
			legendFontSize: 15,
		},
		{
			name: `Car Spend`,
			amount: 80,
			color: "#725A8F",
			legendFontColor: "white",
			legendFontSize: 15,
		},
		{
			name: `Leisure`,
			amount: 60,
			color: "#9E83A3",
			legendFontColor: "white",
			legendFontSize: 15,
		},
		{
			name: `Subscriptions`,
			amount: 40,
			color: "#8B9EB4",
			legendFontColor: "white",
			legendFontSize: 15,
		},
	];

	return (
		<View>
			<PieChart
				data={data}
				width={screenWidth}
				height={280}
				chartConfig={chartConfig}
				accessor={"amount"}
				backgroundColor={"transparent"}
				paddingLeft={"15"}
				center={[10, 10]}
				absolute
			/>
		</View>
	);
};

export default MyPieChart;
