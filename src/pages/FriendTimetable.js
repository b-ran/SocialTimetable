import React, {Component} from "react";
import {Container} from "native-base";

import {navigationOptions, styles} from "../styles/common";
import {createHeaderButton} from "../components/Header";
import Timetable from "../components/Timetable";

export default class FriendTimetable extends Component {

    static navigationOptions = navigationOptions;

    render() {
        const {params} = this.props.navigation.state;
        console.log(params);
        return (
            <Container>

                {createHeaderButton(params.fullName + " Timetable", ()=> this.props.navigation.goBack())}

                <Timetable starHour={8} endHour={22} lessons={params.lessons}/>

            </Container>

        );
    }


}
