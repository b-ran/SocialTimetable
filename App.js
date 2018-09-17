import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import Login from "./src/components/Login";
import ForgottenPassword from "./src/components/ForgottenPassword";
import Register from "./src/components/Register";
import firebase from "firebase"
import WeekView from "./src/components/WeekView";
import Menu from "./src/components/Menu";
import { Root } from "native-base";

type Props = {};
export default class App extends Component<Props> {

    componentWillMount() {

        let config = {
            apiKey: "AIzaSyCQMZQspYkphaxWubdOtY4QLgHjnnxTlNI",
            authDomain: "timetable-6f3af.firebaseapp.com",
            databaseURL: "https://timetable-6f3af.firebaseio.com",
            projectId: "timetable-6f3af",
            storageBucket: "timetable-6f3af.appspot.com",
            messagingSenderId: "453223642924"
        };
        firebase.initializeApp(config);

    }

    render() {
        return (
            <Root>
                <StackNav/>
            </Root>

        );
    }
}

const StackNav = createStackNavigator({
    WeekView: WeekView,
    Login: Login,
    ForgottenPassword: ForgottenPassword,
    Register: Register,
    Menu: Menu,
});


