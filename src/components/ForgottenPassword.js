import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity} from 'react-native';

export default class ForgottenPassword extends Component {

    static navigationOptions = {
        title: "Forgotten Password",
        headerStyle: {
            backgroundColor: "#FFB039",
        },
        headerTintColor: '#FFF',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:"#FFF"}}>a Password</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF9800"
    },

});