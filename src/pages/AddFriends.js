import React, {Component} from "react";
import {Button, Container, Header, Icon, Input, Item, Left, Content, List, ListItem, Text, Right} from "native-base";

import {navigationOptions, styles} from "../styles/common";
import {OtherUsers} from "../model/OtherUsers";
import {Requests} from "../model/Requests";
import {Friends} from "../model/Friends";

export default class AddFriends extends Component {

    static navigationOptions = navigationOptions;

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Item style={{flex: 3}}>
                        <Icon name="search"/>
                        <Input onChangeText={(value) => this.input(value)} placeholder="Search Users"/>
                        <Icon name="people"/>
                    </Item>
                </Header>

                <List dataArray={OtherUsers.users.slice(0, 10)} renderRow={(item) =>
                    <ListItem button onPress={() => this.request(item)}>
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
                    <Text>Users</Text>
                    </ListItem>}>
                </List>

            </Container>
        );
    }


    input(value) {
        OtherUsers.findUsers(value).then(() => {
            this.forceUpdate();
        });
    }

    request(item) {
        Requests.makeRequest(item).then(() => {
            this.forceUpdate();
        })
    }


}
