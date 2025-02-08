import { StyleSheet } from "react-native";

const CARD_WIDTH = 186;
const CARD_HEIGHT = 296;

export const styles = StyleSheet.create({
	title: {
		color: "white",
		fontFamily: "SemiBold",
		fontSize: 24,
	},
	subtitle: {
		color: "grey",
		fontFamily: "Light",
		fontSize: 15,
	},
	sectionTitle: {
		color: "grey",
		textTransform: "uppercase",
		fontFamily: "Light",
	},
	card: {
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		borderRadius: 20,
		paddingVertical: 12,
		paddingHorizontal: 20,
		justifyContent: "space-between",
		alignItems: "flex-end",
		elevation: 8,
		shadowColor: "#fff",
		backgroundColor: "black",
	},
	cardHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	cardDetails: {
		flexDirection: "row",
		gap: 30,
		paddingTop: 40,
	},
	cardNumber: {
		fontFamily: "Wide",
		color: "white",
		fontSize: 16,
	},
	cardLabel: {
		color: "grey",
		fontFamily: "Light",
		fontSize: 10,
	},
	cardInfo: {
		color: "white",
		fontFamily: "Light",
		fontSize: 15,
	},
	cvvContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	eyeIcon: {
		width: 24,
		height: 24,
	},
	copyContainer: {
		paddingTop: 30,
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	copyText: {
		color: "#A90808",
		fontFamily: "Medium",
		fontSize: 12,
	},
	frozenOverlay: {
		position: "absolute",
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		borderRadius: 20,
		overflow: "hidden",
	},
	frostedBlur: {
		flex: 1,
		position: "absolute",
		width: "100%",
		height: "100%",
		borderRadius: 20,
	},
	frozenTexture: {
		width: "100%",
		height: "100%",
		opacity: 0.6,
		position: "absolute",
	},
	freezeButton: {
		alignItems: "center",
		paddingTop: 80,
		gap: 8,
	},
	freezeCircle: {
		width: 58,
		height: 58,
		borderRadius: 100,
		borderWidth: 1,
		borderBottomWidth: 0,
		justifyContent: "center",
		alignItems: "center",
	},
});
