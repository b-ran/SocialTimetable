import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Content, Button, Icon, Text, List, ListItem, Left, Right, Container, Badge} from "native-base"
import {User} from "../model/User"
import {UserMessages} from "./UserMessages"
import {Requests} from "../model/Requests";
import {Friends} from "../model/Friends";
import {styles, navigationOptions} from "../styles/common";


export default class Menu extends Component {
    componentDidMount() {
        this.props.navigation.addListener(
            "willFocus",
            payload => {
                this.forceUpdate();
            }
        )
    }

    signOut() {
        User.signOut();
        UserMessages.sign_out_toast();
        this.props.closeDrawer();
        this.props.navigation.navigate("Login");
        this.forceUpdate();
    }

    render() {
        if (!User.isOnline()) return(<Text/>);
        return (
            <Content style={styles.menu}>
                {/*{this.friendsList(User.isOnline())}*/}

                <Content style={styles.menuBox}>
                    <Text uppercase={false} style={styles.menuBoxText}>{User.state.firstName} {User.state.lastName}</Text>
                    <Text uppercase={false} style={styles.menuBoxText}>#{User.state.uid.substring(0, 5)}</Text>

                    <Left  style={styles.menuLeft}>
                        <Button transparent iconLeft onPress={() => this.props.navigation.navigate("Settings")}>
                            <Icon style={styles.menuBoxIcon} name='cog'/>
                        </Button>
                    </Left>
                </Content>

                <Button transparent iconLeft onPress={() => this.props.navigation.navigate("AllFriends")}>
                    <Icon style={styles.icons} name='md-people'/>
                    <Text uppercase={false} style={styles.labels}>All Friends</Text>
                </Button>

                <Button transparent iconLeft onPress={() => this.props.navigation.navigate("AddFriends")}>
                    <Icon style={styles.icons} name='md-person-add'/>
                    <Text uppercase={false} style={styles.labels}>Add Friends</Text>
                </Button>

                <Button transparent iconLeft onPress={() => this.props.navigation.navigate("FriendRequests")}>
                    <Badge style={styles.badge}>
                        <Text style={styles.badgeText}>{Requests.data.length}</Text>
                    </Badge>
                    <Text uppercase={false} style={styles.labels}>Friend Requests</Text>
                </Button>

                <Button transparent iconLeft onPress={() => this.props.navigation.navigate("About")}>
                    <Icon style={styles.icons} name='md-information-circle'/>
                    <Text uppercase={false} style={styles.labels}>About</Text>
                </Button>
                <Button transparent iconLeft onPress={() => this.props.navigation.navigate("Settings")}>
                    <Icon style={styles.icons} name='cog'/>
                    <Text uppercase={false} style={styles.labels}>Settings</Text>
                </Button>

                <Button transparent iconLeft onPress={() => this.signOut()}>
                    <Icon style={styles.icons} name='md-log-out'/>
                    <Text uppercase={false} style={styles.labels}>Sign Out</Text>
                </Button>

            </Content>
        );
    }

    friendsList(isOnline) {
        if (!isOnline || Friends.data.length === 0) return;
        return (
            <List dataArray={Friends.data.slice(0, 5)} renderRow={(item) =>
                <ListItem button onPress={() => this.openTimetable(item)}>
                    <Left>
                        <Text style={styles.subtext}># {item.uid.substring(0, 5)} </Text>
                        <Text style={styles.text}>{item.firstName + " " + item.lastName}</Text>
                    </Left>
                    <Right>
                        <Icon style={{color: '#FF9800'}} name={"arrow-dropright"}/>
                    </Right>
                </ListItem>
            } renderHeader={() =>
                <ListItem itemHeader first>
                    <Text>Friends</Text>
                </ListItem>}>
            </List>
        );
    }

    openTimetable(item) {
    }
}



