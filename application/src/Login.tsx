import * as React from "react";
import {ImageBackground, StatusBar, StyleSheet} from "react-native";
import {Container} from "native-base"

const splashScreenBackground = require("../assets/splash.jpg");

export default class Login extends React.Component<{}> {
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <ImageBackground source={splashScreenBackground} style={styles.container}>
                </ImageBackground>
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

});
