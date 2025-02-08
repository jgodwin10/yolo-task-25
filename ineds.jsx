import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Canvas, Rect, BlurMask, Skia } from "@shopify/react-native-skia";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

const CARD_WIDTH = 300;
const CARD_HEIGHT = 180;

const FrozenCard = () => {
	const [isFrozen, setIsFrozen] = useState(true);
	const blurOpacity = useSharedValue(1); // 1 = Fully frozen, 0 = Unfrozen

	const toggleFreeze = () => {
		setIsFrozen((prev) => !prev);
		blurOpacity.value = withTiming(isFrozen ? 0 : 1, { duration: 500 });
	};

	return (
		<View style={styles.container}>
			{/* Card */}
			{/* <Canvas style={styles.card}>
				<Rect x={0} y={0} width={300} height={180} color="black">
					<BlurMask blur={10} style="normal" />
				</Rect>
			</Canvas> */}
			<Animated.View style={[styles.overlay, { opacity: blurOpacity }]} />

			{/* Freeze Button */}
			<TouchableOpacity onPress={toggleFreeze} style={styles.button}>
				<Text style={styles.buttonText}>{isFrozen ? "Unfreeze" : "Freeze"}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default FrozenCard;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		backgroundColor: "#111",
	},
	card: {
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		borderRadius: 15,
		overflow: "hidden",
	},
	overlay: {
		position: "absolute",
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		backgroundColor: "rgba(255,255,255,0.1)",
		borderRadius: 15,
	},
	button: {
		marginTop: 20,
		padding: 10,
		backgroundColor: "red",
		borderRadius: 10,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
});
