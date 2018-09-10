import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#FF9800"
    },
    logo: {
        width: 100,
        height: 100

    },
    title: {
        color: "#FFF",
        marginTop: 10,
        textAlign: "center",
        width: 190
    },
    logoContainer: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center"

    },
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: "rgba(255,255,255,0.2)",
        marginBottom: 20,
        color: "#FFF"
    },
    subButtonsContainer: {
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "center",
        paddingTop: 10,
    },

});