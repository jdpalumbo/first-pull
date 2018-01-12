const React = require("react-native");
const {Dimensions} = React;
const deviceHeight = Dimensions.get("window").height;
export default {
    imageContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: "center"
    },
    text: {
        color: "#D8D8D8",
        bottom: 6,
        marginTop: 5
    },
    label: {
        color: "#D8D8D8",
    },
    icon: {
        color: "#D8D8D8",
    },
    headerContainer: {
        alignItems: "center",
        marginBottom:50,
        marginTop: deviceHeight / 8,
        backgroundColor:"transparent"
    },
    fullWidthButton: {
        alignItems: 'center'
    }
};