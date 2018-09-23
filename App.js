import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import Login from "./src/pages/Login";
import ForgottenPassword from "./src/pages/ForgottenPassword";
import Register from "./src/pages/Register";
import firebase from "firebase"
import WeekView from "./src/pages/WeekView";
import Menu from "./src/components/Menu";
import { Root } from "native-base";
import AddFriends from "./src/pages/AddFriends";
import Settings from "./src/pages/Settings";
import AllFriends from "./src/pages/AllFriends";
import About from "./src/pages/About";
import FriendRequests from "./src/pages/FriendRequests";
import AddLesson from "./src/pages/AddLesson";

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
    AddFriends: AddFriends,
    FriendRequests: FriendRequests,
    AllFriends: AllFriends,
    AddLesson: AddLesson,
    Settings: Settings,
    About: About
});


