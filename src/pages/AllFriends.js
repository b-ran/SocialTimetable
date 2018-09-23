import React, {Component} from "react";
import {Container, Icon, Left, List, ListItem, Text, Right} from "native-base";

import {navigationOptions, styles} from "../styles/common";
import {createHeaderButton} from "../components/Header";
import {Friends} from "../model/Friends";

export default class AllFriends extends Component {

    static navigationOptions = navigationOptions;

    render() {
        return (
            <Container>

                {createHeaderButton("All Friends", ()=> this.props.navigation.goBack())}

                <List dataArray={Friends.data} renderRow={(item) =>
                    <ListItem button onPress={() => this.openTimetable(item)}>
                        <Left>
                            <Text style={styles.subtext}># {item.uid.substring(0, 5)} </Text>
                            <Text style={styles.text}>{item.firstName + " " + item.lastName}</Text>
                        </Left>
                        <Right>
                            <Icon name={"arrow-dropright"}/>
                        </Right>
                    </ListItem>
                } renderHeader={() =>
                    <ListItem itemHeader first>
                        <Text>All Friends</Text>
                    </ListItem>}>
                </List>

            </Container>

        );
    }

    openTimetable(item) {

    }


}
