import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "react-navigation";
import Login from "./src/components/Login";
import ForgottenPassword from "./src/components/ForgottenPassword";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <StackNav />
    );
  }
}

const StackNav = createStackNavigator({
    Login: Login,
    ForgottenPassword: ForgottenPassword,
});


