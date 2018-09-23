import {StyleSheet} from "react-native";

export const navigationOptions = {
    header: null
};

export const styles = StyleSheet.create({


    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: "#4050B5",
        marginBottom: 20,
        color: "#FFF"
    },
    subButtonsContainer: {
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "center",
        paddingTop: 10,
    },
    subButtonText: {
        color: "#4050B5"
    },


    logo: {
        width: 100,
        height: 100

    },
    logoContainer: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center"
    },
    logoTitle: {
        color: "#4050B5",
        marginTop: 10,
        textAlign: "center",
        width: 190
    },
    button: {
        backgroundColor: "#4050B5",
        height: 40
    },


    text: {
    },
    subtext: {
        color: "#8e9093",
        fontSize: 12,
    },

    menu: {
        backgroundColor: "#FFF",
    },
    fab: {
        backgroundColor: "#4050B5",
    },
    icons: {
        color: "#757575",
        width: "9%",

    },
    labels: {
        color: "#000",
        fontSize: 14,
        marginLeft: "5%",
    },
    badge: {
        backgroundColor: "#757575",
        width: 23,
        height: 23,
        left: "50%",
        marginRight: "6%",
    },
    badgeText: {
        fontSize: 12,
    },

    menuBox: {
        backgroundColor: "#4050B5",
    },
    menuBoxText: {
        color: "#FFF",
        fontSize: 12,
        top: "25%",
        left: "8%",
    },
    menuBoxIcon: {
        color: "#FFF",
        width: "10%",
    },
    menuLeft: {
        left: "35%",
        bottom: "25%",
    },

    picker: {
        width: "50%",
        height: "6%",
        left: "50%",
        color: "#FFF",
        bottom: "25%",

    },
    pickerView: {

        width: "100%",
        backgroundColor: "#4050B5",
        marginBottom: "5%",

    },
    pickerText: {
        top: "25%",
        color: "#FFF",
        paddingLeft: 5,

    },

    timePickerView: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        flexGrow: 1,
        height: "5%",
        marginBottom: 20,
    },
    timePickerLeft: {
        backgroundColor: "#4050B5",
        width: "47.5%",
        marginRight: 10,
    },
    timePickerRight: {
        backgroundColor: "#4050B5",
        width: "100%",
    },
    timePickerText: {
        left: "2.5%",
        top: "25%",
        color: "#FFF",
    },

});
