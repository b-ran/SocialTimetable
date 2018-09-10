import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import ForgottenPassword from "./ForgottenPassword";
import {styles} from "../styles/common";
import {User} from "../model/User";

export default class Login extends Component {

    static navigationOptions = {
        header: null,
        // title: "Login",
        // headerStyle: {
        //     backgroundColor: "#FFB039",
        // },
        // headerTintColor: '#FFF',
    };

    state = {
        email: "",
        password: "",
    };

    login = () => {
        const { email, password } = this.state;
        User.login(email, password);
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
                      returnKeyType = {"next"}
                      placeholder={"Email"}
                      placeholderTextColor={"white"}
                      keyboardType={"email-address"}
                      autoCapitalize={"none"}
                      autoCorrect={false}
                      style={styles.input}
                      onSubmitEditing={() => { this.passwordTextInput.focus(); }}
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
                      ref={(input) => { this.passwordTextInput = input; }}
                      onSubmitEditing={this.login}
                      underlineColorAndroid={"rgba(0,0,0,0)"}
                  />

                  <Button title={"Login"} onPress={this.login} color={"#FFB039"}/>

                  <View style={styles.subButtonsContainer}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("ForgottenPassword")} style={{marginRight: 10}}>
                        <Text style={{color:"#FFF"}}>Forgotten Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Register")} >
                        <Text style={{color:"#FFF"}}>Register</Text>
                    </TouchableOpacity>
                  </View>

              </View>

          </View>

        );
    }
}