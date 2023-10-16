import React, { FC } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import MyChartKitChart from "../../components/Chart/Chart";
import MyPieChart from "../../components/PieChart/PieChart";
import { LinearGradient } from "expo-linear-gradient";
const image = {
	uri: "/Users/FiraMurad/Desktop/tsflr/xpenses/assets/main_bg1.png",
};

const HomeScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.backgroundImage} resizeMode="cover" />
			<View style={styles.overlay} />
			<View style={styles.contentContainer}>
				<MyChartKitChart />
				<Text
					style={{
						color: "#fff",
						fontFamily: "Onest",
						fontSize: 16,
						fontWeight: "bold",
						alignSelf: "flex-start",
						marginVertical: 20,
					}}
				>
					Spend Categories
				</Text>
				<View style={styles.pieChartContainer}>
					<LinearGradient
						colors={["#DA80BD", "black"]} // Adjust the pink colors to your liking
						style={styles.gradientBackground}
					/>
					<MyPieChart />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	backgroundImage: {
		position: "absolute",
		top: 0,
		left: -1000,
		bottom: -200,
		right: 0,
	},
	contentContainer: {
		alignItems: "center",
		justifyContent: "center",
		// other styles for your content container
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: "rgba(0,0,0,0.4)",
	},
	pieChartContainer: {
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	gradientBackground: {
		position: "absolute",
		opacity: 0.7,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: 20,
	},
});

export default HomeScreen;
