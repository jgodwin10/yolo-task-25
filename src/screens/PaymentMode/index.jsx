import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import PaymentButtons from "../../components/PaymentButton";
import { faker } from "@faker-js/faker";
import { styles } from "./styles";

const generateCardNumber = () => {
	return Array(4)
		.fill(0)
		.map(() => faker.finance.creditCardNumber("####"));
};

const YoloPayScreen = () => {
	const [cardNumber, setCardNumber] = useState(generateCardNumber());
	const [isFrozen, setIsFrozen] = useState(true);
	const blurOpacity = useSharedValue(1); // 1 = Fully frozen, 0 = Unfrozen

	const toggleFreeze = () => {
		setIsFrozen((prev) => !prev);
		blurOpacity.value = withTiming(isFrozen ? 0 : 1, { duration: 1000 }); // Fix logic
	};

	useEffect(() => {
		setCardNumber(generateCardNumber());
	}, [isFrozen]);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#000", paddingHorizontal: 15, paddingTop: 15 }}>
			<View style={{ gap: 10 }}>
				<Text style={styles.title}>select payment mode</Text>
				<Text style={styles.subtitle}>choose your preferred payment method to make payment.</Text>

				<PaymentButtons />
				{/* Digital Debit Card Section */}
				<View style={{ paddingTop: 50, gap: 10 }}>
					<Text style={styles.sectionTitle}>your digital debit card</Text>

					<View style={{ flexDirection: "row", gap: 20 }}>
						{/* Card Container */}
						<View style={{ position: "relative" }}>
							{/* Actual Card */}
							<LinearGradient colors={["rgba(0, 0, 0, 0.36)", "rgba(0,0,0,0.9)"]} style={[styles.card, { opacity: isFrozen ? 0 : 1 }]}>
								<View>
									<View style={styles.cardHeader}>
										<Image source={require("../../../assets/logo.png")} />
										<Image source={require("../../../assets/bank.png")} />
									</View>

									{/* Card Details */}
									<View style={styles.cardDetails}>
										<View style={{ gap: 5 }}>
											{cardNumber.map((group, index) => (
												<Text key={index} style={{ fontFamily: "Wide", color: "white", fontSize: 16 }}>
													{isFrozen ? "****" : group}
												</Text>
											))}
										</View>

										{/* Expiry & CVV */}
										<View style={{ justifyContent: "space-between" }}>
											<View>
												<Text style={styles.cardLabel}>expiry</Text>
												<Text style={styles.cardInfo}>01/28</Text>
											</View>
											<View>
												<Text style={styles.cardLabel}>cvv</Text>
												<View style={styles.cvvContainer}>
													<Image source={require("../../../assets/star.png")} />
													<Image style={styles.eyeIcon} source={require("../../../assets/eye.png")} />
												</View>
											</View>
										</View>
									</View>

									{/* Copy Details */}
									<View style={styles.copyContainer}>
										<Image source={require("../../../assets/u_copy.png")} />
										<Text style={styles.copyText}>copy details</Text>
									</View>
								</View>

								{/* Card Logo */}
								<Image source={require("../../../assets/Group.png")} />
							</LinearGradient>

							{/* Frosted Effect Overlay */}
							<Animated.View style={[styles.frozenOverlay, { opacity: blurOpacity }]}>
								<BlurView intensity={100} tint="default" style={styles.frostedBlur} />
								<Image style={styles.frozenTexture} source={require("../../../assets/frozen_texture.png")} />
							</Animated.View>
						</View>

						{/* Freeze Button */}
						<TouchableOpacity onPress={toggleFreeze} style={styles.freezeButton}>
							<View style={[styles.freezeCircle, { borderColor: isFrozen ? "#A90808" : "white" }]}>
								<Image source={isFrozen ? require("../../../assets/Vector.png") : require("../../../assets/Vector1.png")} />
							</View>
							<Text style={{ color: isFrozen ? "#A90808" : "white" }}>{isFrozen ? "unfreeze" : "freeze"}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default YoloPayScreen;
