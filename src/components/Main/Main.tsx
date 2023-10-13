import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const MainComponent: FC = () => {
	return (
		<View style={styles.container}>
			<Text>Main Component</Text>
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

export default MainComponent;
