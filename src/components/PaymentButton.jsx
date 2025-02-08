import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PaymentButtons = () => {
	// const [selected, setSelected] = useState("pay");

	return (
		<View style={{ flexDirection: "row", alignItems: "center", width: "100%", gap: 10, paddingTop: 15 }}>
			<TouchableOpacity style={{ width: 96, padding: 8, borderRadius: 100, borderColor: "white", borderWidth: 1, borderBottomWidth: 0, alignItems: "center", justifyContent: "center" }}>
				<Text style={{ color: "white", fontFamily: "Medium", fontSize: 15 }}>Pay</Text>
			</TouchableOpacity>

			<TouchableOpacity style={{ width: 96, padding: 8, borderRadius: 100, borderColor: "#A90808", borderWidth: 1, borderBottomWidth: 0, alignItems: "center", justifyContent: "center" }}>
				<Text style={{ color: "white", fontFamily: "Medium", fontSize: 15, color: "#A90808" }}>Cash</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	
});

export default PaymentButtons;
