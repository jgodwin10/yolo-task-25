import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PaymentButtons from "../../components/PaymentButton";

const YoloPayScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#111", paddingHorizontal: 10, paddingTop: 10 }}>
			<View style={{ gap: 10 }}>
				<Text style={{ color: "white", fontFamily: "SemiBold", fontSize: 24 }}>select payment mode</Text>
				<Text style={{ color: "grey", fontFamily: "Light", fontSize: 15 }}>choose your preferred payment method to make payment.</Text>

				<PaymentButtons />

				<View style={{ paddingTop: 20 }}>
					<Text style={{ color: "grey", textTransform: "uppercase", fontFamily: "Light" }}>your digital debit card</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default YoloPayScreen;

const styles = StyleSheet.create({});
