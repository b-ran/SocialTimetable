import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {Header, Left, Body, Icon, Button, Title, Container} from "native-base"
import {navigationOptions, styles} from "../styles/common";
import {User} from "../model/User";

export default class ForgottenPassword extends Component {

    static navigationOptions = navigationOptions;

    state = {
        email: "",
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
                    <Title>Forgotten Password</Title>
                    </Body>
                </Header>

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

                    <Button block onPress={this.submit} style={styles.button}>
                        <Text style={{color: "#FFF"}}>Submit</Text>
                    </Button>
                </View>
            </Container>
        );
    }

    submit = () => {
        const {email} = this.state;
        User.sendPasswordResetEmail(email);
    };
}

