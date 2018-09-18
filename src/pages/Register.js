import React, {Component} from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import {Header, Left, Body, Icon, Button, Title} from "native-base"
import {navigationOptions, styles} from "../styles/common";
import {User} from "../model/User";

export default class Register extends Component {

    static navigationOptions = navigationOptions;

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    render() {
        return (
            <ScrollView resetScrollToCoords={{x: 0, y: 0}} contentContainerStyle={styles.container}>

                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Register</Title>
                    </Body>
                </Header>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../assets/timetable-logo.png")}/>
                    <Text style={styles.title}>The Social Timetable App For You and Your Friends</Text>
                </View>

                <View style={styles.formContainer}>

                    <TextInput
                        onChangeText={(value) => this.setState({firstName: value})}
                        returnKeyType={"next"}
                        placeholder={"First Name"}
                        placeholderTextColor={"white"}
                        autoCapitalize={"words"}
                        autoCorrect={false}
                        style={styles.input}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        onSubmitEditing={() => {
                            this.lastNameInput.focus();
                        }}
                    />

                    <TextInput
                        onChangeText={(value) => this.setState({lastName: value})}
                        returnKeyType={"next"}
                        placeholder={"Last Name"}
                        placeholderTextColor={"white"}
                        autoCapitalize={"words"}
                        autoCorrect={false}
                        style={styles.input}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        ref={(input) => {
                            this.lastNameInput = input;
                        }}
                        onSubmitEditing={() => {
                            this.emailInput.focus();
                        }}
                    />

                    <TextInput
                        onChangeText={(value) => this.setState({email: value})}
                        returnKeyType={"next"}
                        placeholder={"Email"}
                        placeholderTextColor={"white"}
                        keyboardType={"email-address"}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={styles.input}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        ref={(input) => {
                            this.emailInput = input;
                        }}
                        onSubmitEditing={() => {
                            this.passwordInput.focus();
                        }}
                    />

                    <TextInput
                        onChangeText={(value) => this.setState({password: value})}
                        returnKeyType={"next"}
                        placeholder={"Password"}
                        placeholderTextColor={"white"}
                        secureTextEntry={true}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={styles.input}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        ref={(input) => {
                            this.passwordInput = input;
                        }}
                        onSubmitEditing={() => {
                            this.confimPasswordInput.focus();
                        }}
                    />

                    <TextInput
                        onChangeText={(value) => this.setState({confirmPassword: value})}
                        placeholder={"Confirm Password"}
                        placeholderTextColor={"white"}
                        secureTextEntry={true}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={styles.input}
                        onSubmitEditing={this.submit}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        ref={(input) => {
                            this.confimPasswordInput = input;
                        }}
                    />


                    <Button block onPress={this.submit} style={styles.button}>
                        <Text style={{color: "#FFF"}}>Submit</Text>
                    </Button>

                </View>
            </ScrollView>
        );
    }

    submit = () => {
        const {firstName, lastName, email, password, confirmPassword} = this.state;
        User.register(firstName, lastName, email, password);
        this.props.navigation.navigate("Login");
    };

}

