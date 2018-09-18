import React, {Component} from "react";
import {Button, Container, Header, Icon, Input, Item, Left, Text, List, ListItem} from "native-base";

import {navigationOptions, styles} from "../styles/common";
import {OtherUsers} from "../model/OtherUsers";

export default class AddFriends extends Component {

    static navigationOptions = navigationOptions;

    state = {
        search: "",
    };

    render() {
        return(
            <Container style={styles.container}>
                <Header searchBar rounded style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Item style={{flex: 3}}>
                        <Icon name="search"/>
                        <Input onChangeText={(value) => this.setState({search: value})} placeholder="Search Users"/>
                        <Icon name="people"/>
                    </Item>
                </Header>

                {this.drawUsers()}

            </Container>
        );
    }

    drawUsers() {
        return(
            <List dataArray={OtherUsers.users}
                  renderRow={(item) =>
                      <ListItem>
                          <Text>{item.firstName + " " + item.lastName}</Text>
                      </ListItem>
                  }>
            </List>
        );
    }

    componentDidUpdate() {
        //console.log(this.state.search);
        OtherUsers.findUsers(this.state.search).then(() => {
            console.log(OtherUsers.users);
            this.forceUpdate();
        });
    }
}
