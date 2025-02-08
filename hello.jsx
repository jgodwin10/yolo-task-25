import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const TAB_WIDTH = width / 3;
const CURVE_HEIGHT = 50;
const ICON_SIZE = 24;

const HomeScreen = () => (
	<View style={styles.screen}>
		<Text style={styles.text}>Home</Text>
	</View>
);
const PayScreen = () => (
	<View style={styles.screen}>
		<Text style={styles.text}>Pay</Text>
	</View>
);
const ProfileScreen = () => (
	<View style={styles.screen}>
		<Text style={styles.text}>Profile</Text>
	</View>
);

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
	const translateY = useSharedValue(0);

	React.useEffect(() => {
		translateY.value = withTiming(state.index === 1 ? -15 : 0, { duration: 300 });
	}, [state.index]);

	return (
		<View style={styles.tabBarContainer}>
			<Svg width={width} height={CURVE_HEIGHT} style={styles.curveSvg}>
				<Path d={`M 0 0 Q ${width / 2} ${CURVE_HEIGHT * 2} ${width} 0 L ${width} ${CURVE_HEIGHT} L 0 ${CURVE_HEIGHT} Z`} fill="black" />
			</Svg>
			<View style={styles.tabBar}>
				{state.routes.map((route, index) => {
					const isFocused = state.index === index;
					const iconName = route.name === "Home" ? "home-outline" : route.name === "Pay" ? "qrcode-scan" : "cog-outline";

					return (
						<TouchableOpacity key={route.key} style={styles.tabButton} onPress={() => navigation.navigate(route.name)}>
							<Animated.View style={[styles.iconWrapper, index === 1 && { transform: [{ translateY: translateY }] }]}>
								<MaterialCommunityIcons name={iconName} size={ICON_SIZE} color={isFocused ? "white" : "gray"} />
							</Animated.View>
							<Text style={[styles.tabText, isFocused && styles.activeText]}>{route.name.toLowerCase()}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
					<Tab.Screen name="Home" component={HomeScreen} />
					<Tab.Screen name="Pay" component={PayScreen} />
					<Tab.Screen name="Profile" component={ProfileScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	screen: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#111" },
	text: { color: "#fff", fontSize: 20 },
	tabBarContainer: { position: "absolute", bottom: 0, width: "100%" },
	curveSvg: { position: "absolute", bottom: 0 },
	tabBar: { flexDirection: "row", backgroundColor: "#000", paddingBottom: 10, paddingTop: CURVE_HEIGHT / 2, justifyContent: "space-around" },
	tabButton: { alignItems: "center" },
	iconWrapper: { backgroundColor: "transparent", padding: 10, borderRadius: 30 },
	tabText: { color: "gray", fontSize: 12, marginTop: 4 },
	activeText: { color: "white", fontWeight: "bold" },
});
