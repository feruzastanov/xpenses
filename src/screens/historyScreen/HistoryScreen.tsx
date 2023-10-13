import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const HistoryScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Text>History Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default HistoryScreen;
