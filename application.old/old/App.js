import React, {Component} from "react";
import {
    Button, Container, Content, Footer, FooterTab, Form, H1, Header, Icon, Input, Item, Label, Left, Right, Text,
    Title
} from 'native-base';
import {ImageBackground, StatusBar, View} from "react-native";
import styles from "./Styles";

const splashScreenBackground = require("./images/splash.jpg");

export default class AnatomyExample extends Component {
    state = {
        result: null,
        usernameValid: false
    };

    componentDidMount() {

    }

    _fetchExampleAsync = async () => {
        try {

            let response = await fetch("http://localhost:3001/health");
            let result = await response.json();

            this.setState({result});
        } catch (e) {
            this.setState({result: e});
        }
    };

    _login = async () => {
        try {

            let response = await fetch("http://localhost:3001/health");

            let result = await response.json();

            this.setState({result});
        } catch (e) {
            this.setState({result: e});
        }
    };

    _checkUser = async () => {
        try {

            let usernameValid = await true;

            this.setState({usernameValid});
        } catch (e) {
            this.setState({result: e});
        }
    };

    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <ImageBackground source={splashScreenBackground} style={styles.imageContainer}>
                    <View
                        style={styles.headerContainer}>
                        <View style={{marginTop: 20}} />
                        <H1 style={styles.text}>Kilo {JSON.stringify(this.state.result)}</H1>
                        <View style={{marginTop: 8}} />
                    </View>
                    <Form>
                        <Item floatingLabel style={{marginRight: 15}} success={this.state.usernameValid}>
                            <Label style={styles.label}>Username or Email</Label>
                            <Icon style={styles.icon} name={this.state.usernameValid ? "checkmark-circle" : "person" } />
                            <Input onBlur={this._checkUser} style={{color: '#FEFEFE'}} />
                        </Item>
                        <Item floatingLabel style={{marginRight: 15}}>
                            <Label style={styles.label}>Password</Label>
                            <Icon style={styles.icon} name='lock' />
                            <Input secureTextEntry={true} style={{color: '#FEFEFE'}} />
                        </Item>
                    </Form>
                    <View style={{
                        flex: 1,
                        width: null,
                        height: null, marginTop: 25, alignItems: "center"
                    }}>
                        <Button onPress={this._login} style={{alignSelf: "auto"}} bordered light><Text> Login </Text></Button>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}

