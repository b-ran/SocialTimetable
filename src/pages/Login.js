import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Icon, Button, Title, Drawer} from "native-base"
import {Text, View, Image, TextInput, Alert, TouchableOpacity} from 'react-native';
import {styles, navigationOptions} from "../styles/common";
import {User} from "../model/User";

export default class Login extends Component {

    static navigationOptions = navigationOptions;

    state = {
        email: "",
        password: "",
    };

     signIn = () => {

        const {email, password} = this.state;
        User.signIn(email, password).then(() => {
            console.log("signIn");
            this.props.navigation.navigate("WeekView");
        });
    };

    render() {
        return (
            <Container style={styles.container}>

                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Login</Title>
                    </Body>
                </Header>


                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../assets/timetable-logo.png")}/>
                    <Text style={styles.title}>The Social Timetable App For You and Your Friends</Text>
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
                            <Text style={{color: "#FFF"}}>Forgotten Password</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                            <Text style={{color: "#FFF"}}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Container>

        );
    }
}
