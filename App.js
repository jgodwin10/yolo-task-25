import React from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CustomTabBar from "./customTabBar";
import YoloPayScreen from "./src/screens/PaymentMode";
import { useFonts } from "expo-font";
// import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

// Screens
const HomeScreen = () => (
	<View style={styles.screen}>
		<Text>Home Screen</Text>
	</View>
);

const GinieScreen = () => (
	<View style={styles.screen}>
		<Text>Ginie Screen</Text>
	</View>
);

const Tab = createBottomTabNavigator();

export default function App() {
	const [loaded] = useFonts({
		Bold: require("./assets/fonts/Poppins-Bold.ttf"),
		Medium: require("./assets/fonts/Poppins-Medium.ttf"),
		SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
		Light: require("./assets/fonts/Poppins-Light.ttf"),
	});

	if (!loaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="YoloPay" tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="YoloPay" component={YoloPayScreen} />
				<Tab.Screen name="Ginie" component={GinieScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

// Styles
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#111",
	},
	tabBar: {
		flexDirection: "row",
		// backgroundColor: "#000",
		paddingBottom: 10,
		paddingTop: 10,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	tabItem: {
		flex: 1,
		alignItems: "center",
		position: "relative",
	},
	label: {
		color: "gray",
		fontSize: 12,
		marginTop: 4,
	},
	curve: {
		position: "absolute",
		top: -10,
	},
});
