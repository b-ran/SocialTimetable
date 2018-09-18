import React, {Component} from "react";
import {Container} from "native-base";

import {navigationOptions, styles} from "../styles/common";
import {createHeaderButton} from "../components/Header";

export default class AllFriends extends Component {

    static navigationOptions = navigationOptions;

    render() {

        return(
            <Container style={styles.container}>
                {createHeaderButton("All Friends", ()=> this.props.navigation.goBack())}
            </Container>
        );

    }
}
