import * as React from "react";
import {Dimensions, ImageBackground, StatusBar, StyleSheet, View} from "react-native";
import {Container, H1} from "native-base"


const deviceHeight = Dimensions.get("window").height;
const splashScreenBackground = require("../assets/splash.jpg");

export default class Login extends React.Component<{}> {
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <ImageBackground source={splashScreenBackground} style={styles.container}>
                </ImageBackground>
                <View
                    style={styles.headerContainer}>
                    <View style={{marginTop: 20}} />
                    <H1 style={styles.text}>First Pull</H1>
                    <View style={{marginTop: 8}} />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginBottom: 50,
        marginTop: deviceHeight / 8,
        backgroundColor: "transparent"
    },

});
