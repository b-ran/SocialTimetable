import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Icon, Button, Title, Drawer} from "native-base"
import {Text, View, Image, TextInput, Alert, TouchableOpacity} from 'react-native';
import {styles, navigationOptions} from "../styles/common";
import {User} from "../model/User";
import {createHeaderButton} from "../components/Header";

export default class Login extends Component {

    static navigationOptions = navigationOptions;

    state = {
        email: "",
        password: "",
    };

     signIn = () => {
        const {email, password} = this.state;
        User.signIn(email, password).then(() => {
            this.props.navigation.navigate("WeekView");
            User.populateAll();
        });
    };

    render() {
        return (
            <Container>

                {createHeaderButton("Login", ()=> this.props.navigation.goBack())}

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../assets/timetable-logo.png")}/>
                    <Text style={styles.logoTitle}>The Social Timetable App For You and Your Friends</Text>
                </View>

                <View style={styles.formContainer}>

                    <TextInput
                        onChangeText={(value) => this.setState({email: value})}
                        returnKeyType={"next"}
                        placeholder={"Email"}
                        placeholderTextColor={"white"}
                        keyboardType={"email-address"}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={styles.input}
                        onSubmitEditing={() => {
                            this.passwordTextInput.focus();
                        }}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                    />
                    <TextInput
                        onChangeText={(value) => this.setState({password: value})}
                        placeholder={"Password"}
                        secureTextEntry={true}
                        placeholderTextColor={"white"}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={styles.input}
                        ref={(input) => {
                            this.passwordTextInput = input;
                        }}
                        onSubmitEditing={this.signIn}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                    />

                    <Button block onPress={this.signIn} style={styles.button}>
                        <Text style={{color: "#FFF"}}>Login</Text>
                    </Button>

                    <View style={styles.subButtonsContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgottenPassword")}
                                          style={{marginRight: 10}}>
                            <Text style={styles.subButtonText}>Forgotten Password</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                            <Text style={styles.subButtonText}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Container>

        );
    }
}
