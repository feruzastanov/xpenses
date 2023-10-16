// src/navigation/TabNavigator.tsx
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "../../screens/homeScreen/HomeScreen";
import ProfileScreen from "../../screens/profileScreen/ProfileScreen";
import AddExpenseScreen from "../../screens/addExpenseScreen/AddExpenseScreen";
import BalanceScreen from "../../screens/balanceScreen/BalanceScreen";
import HistoryScreen from "../../screens/historyScreen/HistoryScreen";
import { useTheme } from "react-native-paper";
import { View, TouchableOpacity, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

type RootStackParamList = {
	Home: undefined;
	Balance: undefined;
	"Add Expense": undefined;
	History: undefined;
	Profile: undefined;
};

const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
	const theme = useTheme();
	const navigation =
		useNavigation<BottomTabNavigationProp<RootStackParamList, "Add Expense">>();
	theme.colors.secondaryContainer = "transparent";
	return (
		// <SafeAreaView style={{ flex: 1 }}>
		<View style={{ flex: 1 }}>
			<Tab.Navigator
				initialRouteName="Home"
				shifting={true}
				barStyle={{ backgroundColor: "#2C3E63" }}
				activeColor="white"
				inactiveColor="white"
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<Icon name="home" size={20} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name="Balance"
					component={BalanceScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<FontAwesome5
								name="coins"
								size={20}
								color={color}
								style={{ fontWeight: "bold" }}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Add Expense"
					component={AddExpenseScreen}
					options={{
						tabBarIcon: () => null,
						tabBarLabel: "",
					}}
				/>
				<Tab.Screen
					name="History"
					component={HistoryScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<Icon name="settings" size={20} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={ProfileScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<Icon name="person" size={20} color={color} />
						),
					}}
				/>
			</Tab.Navigator>
			<TouchableOpacity
				style={{
					position: "absolute",
					bottom: Platform.OS === "android" ? 20 : 40,
					alignSelf: "center",
					width: 100,
					height: 100,
					borderRadius: 50,
					backgroundColor: "yellow",
					justifyContent: "center",
					alignItems: "center",
					zIndex: 2, // ensure the button is above the tab bar
				}}
				onPress={() => navigation.navigate("Add Expense")}
				activeOpacity={1}
			>
				<FontAwesome5 name="plus" size={24} color="#C22C92" />
			</TouchableOpacity>
		</View>
		// </SafeAreaView>
	);
};

export default TabNavigator;
