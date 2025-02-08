import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");
const TAB_WIDTH = width / 3; // Assuming 3 tabs
const CURVE_HEIGHT = 180; // Height of the bottom curve

const CustomTabBar = ({ state, descriptors, navigation }) => {
	const animatedValues = useRef(state.routes.map(() => new Animated.Value(0))).current;
	const animatedValue = useRef(state.routes.map(() => new Animated.Value(0))).current;

	return (
		<View style={styles.container}>
			{/* Curved Background */}
			<Svg width={width} height={150} style={styles.curveSvg}>
				{/* Main Black Background */}
				<Path d={`M 0 70 Q ${width / 2} 0 ${width} 70 L ${width} 150 L 0 150 Z`} fill="black" />

				{/* White Stroke Only on Top */}
				<Path d={`M 0 70 Q ${width / 2} 0 ${width} 70`} stroke="white" strokeWidth={0.5} fill="transparent" />
			</Svg>
			<View style={styles.tabBar}>
				{state.routes.map((route, index) => {
					const isFocused = state.index === index;

					// Animate icon & text moving up
					Animated.timing(animatedValues[index], {
						toValue: isFocused ? 51 : 41, // Move up when active
						duration: 500,
						useNativeDriver: false,
					}).start();

					Animated.timing(animatedValue[index], {
						toValue: isFocused ? -5 : 0, // Move up when active
						duration: 500,
						useNativeDriver: false,
					}).start();

					const onPress = () => navigation.navigate(route.name);

					return (
						<TouchableOpacity key={route.name} onPress={onPress} style={styles.tabItem}>
							{/* Highlight the Active Tab */}
							{/* {isFocused && (
								<View style={styles.activeTabBg}>
									<Svg height="800" width="100" viewBox="0 0 100 30">
										<Path d="M0 30 Q50 0 100 30 Z" fill="black" />
									</Svg>
								</View>
							)} */}

							{/* Animated icon & text */}

							<Animated.View style={[styles.Wrapper, { transform: [{ translateY: animatedValue[index] }] }]}>
								<Animated.View style={[styles.iconWrapper, { width: animatedValues[index], height: animatedValues[index] }]}>
									{/* <View style={{ borderRadius: 100, padding: 4, borderColor: "white", borderWidth: 1 }}> */}
									<Icon
										// style={{ borderRadius: 100, padding: 4, borderColor: "#0D0D0D", borderWidth: 1 }}
										name={route.name === "Home" ? "home" : route.name === "YoloPay" ? "qrcode-scan" : "cog"}
										size={route.name === "Home" ? 24 : route.name === "YoloPay" ? 20 : 24}
										color={isFocused ? "white" : "gray"}
									/>
									{/* </View> */}
								</Animated.View>
								<Text style={[styles.label, isFocused && { color: "white" }]}>{route.name}</Text>
							</Animated.View>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		alignItems: "center",
		// overflow: "hidden",
		// border
	},
	curveSvg: {
		position: "absolute",
		bottom: -10,
		// top: -25,
		// width: TAB_WIDTH,
	},
	tabBar: {
		flexDirection: "row",
		// // backgroundColor: "#000",
		paddingBottom: 15,
		// paddingTop: 50,
		// borderTopLeftRadius: 140,
		// borderTopRightRadius: 140,
		// elevation: 12,
		// shadowColor: "#000",
		// shadowOffset: { width: 0, height: -5 },
		// shadowOpacity: 0.3,
		// shadowRadius: 8,
		width: "100%",
	},
	tabItem: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
		height: 60,
	},
	activeTabBg: {
		position: "absolute",
		top: -18,
	},
	iconWrapper: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
		// padding: ,
		borderColor: "white",
		borderWidth: 0.2,
		elevation: 12,
		shadowColor: "#aaa",
		shadowOffset: { width: 0, height: -5 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		// backgroundColor: 'white'
	},
	Wrapper: {
		alignItems: "center",
		justifyContent: "center",
	},
	label: {
		color: "gray",
		fontSize: 12,
		marginTop: 4,
	},
});

export default CustomTabBar;
