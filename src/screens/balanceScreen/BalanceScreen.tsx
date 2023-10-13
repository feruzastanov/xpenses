import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const BalanceScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Text>Balance Screen</Text>
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

export default BalanceScreen;
