import React, {Component} from "react";
import {Container, Icon, Left, List, ListItem, Text, Right} from "native-base";

import {navigationOptions, styles} from "../styles/common";
import {Requests} from "../model/Requests";
import {createHeaderButton} from "../components/Header";

export default class FriendRequests extends Component {

    static navigationOptions = navigationOptions;

    render() {
        return (
            <Container>

                {createHeaderButton("Friend Requests", ()=> this.props.navigation.goBack())}

                <List dataArray={Requests.data} renderRow={(item) =>
                    <ListItem button onPress={() => this.acceptRequest(item)}>
                        <Left>
                            <Text style={styles.subtext}># {item.uid.substring(0, 5)} </Text>
                            <Text style={styles.text}>{item.firstName + " " + item.lastName}</Text>
                        </Left>
                        <Right>
                            <Icon name={"add"}/>
                        </Right>
                    </ListItem>
                } renderHeader={() =>
                    <ListItem itemHeader first>
                        <Text>Friend Requests</Text>
                    </ListItem>}>
                </List>

            </Container>

        );
    }

    acceptRequest(item) {
        Requests.acceptRequest(item).then(() => {
            this.forceUpdate();
        })
    }


}
