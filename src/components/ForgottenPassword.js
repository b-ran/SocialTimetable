import React, {Component} from 'react';
import {Text, View, Image, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import {styles} from "../styles/common";
import {User} from "../model/User";

export default class ForgottenPassword extends Component {

    static navigationOptions = {
        title: "Forgotten Password",
        headerStyle: {
            backgroundColor: "#FFB039",
        },
        headerTintColor: '#FFF',
    };

    state = {
        email: "",
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../assets/timetable-logo.png")}/>
                    <Text style={styles.title}>The Social Timetable App For You and Your Friends</Text>
                </View>

                <View style={styles.formContainer}>

                    <TextInput
                        onChangeText={(value) => this.setState({email: value})}
                        placeholder={"Email"}
                        placeholderTextColor={"white"}
                        keyboardType={"email-address"}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={styles.input}
                        onSubmitEditing={this.submit}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                    />

                    <Button title={"Submit"} onPress={this.submit} color={"#FFB039"}/>
                </View>
            </View>
        );
    }

    submit = () => {
        const {email} = this.state;
        User.sendPasswordResetEmail(email);
    };
}

