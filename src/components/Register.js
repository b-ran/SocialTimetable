import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Register extends Component {

    static navigationOptions = {
        title: "Register",
        headerStyle: {
            backgroundColor: "#FFB039",
        },
        headerTintColor: '#FFF',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:"#FFF"}}>Register</Text>
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