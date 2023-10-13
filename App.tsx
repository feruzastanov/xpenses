import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import MainComponent from "./src/components/Main/Main";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<MainComponent />
				<StatusBar style="auto" />
			</View>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
