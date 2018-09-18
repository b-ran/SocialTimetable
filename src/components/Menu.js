import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Content, Button, Icon, Text} from "native-base"
import {User} from "../model/User"
import {UserMessages} from "./UserMessages"


export default class Menu extends Component {

    count = 0;

    componentDidMount() {
        this.props.navigation.addListener(
            "willFocus",
            payload => {
                this.forceUpdate();
                console.log("didFocus");
            }
        )

    }

    signOut() {
        User.signOut();
        UserMessages.sign_out_toast();
        this.forceUpdate();
    }

    friendButtons(isOnline) {
        if (isOnline) {
            return (
                <Content>
                    <Button transparent iconLeft onPress={() => this.props.navigation.navigate("AddFriends")}>
                        <Icon style={styles.button} name='md-person-add'/>
                        <Text style={styles.button}>Add Friends</Text>
                    </Button>

                    <Button transparent iconLeft onPress={() => this.props.navigation.navigate("AllFriends")}>
                        <Icon style={styles.button} name='md-people'/>
                        <Text style={styles.button}>All Friends</Text>
                    </Button>
                </Content>
            );
        }
    }

    test() {
        this.count++;
        return (<Text>{this.count}</Text>);
    }

    accountButton(isOnline) {
        if (isOnline) {
            return (
                <Button transparent iconLeft onPress={() => this.signOut()}>
                    <Icon style={styles.button} name='md-log-out'/>
                    <Text style={styles.button}>Sign Out</Text>
                </Button>
            );
        } else {
            return (
                <Button transparent iconLeft onPress={() => this.props.navigation.navigate("Login")}>
                    <Icon style={styles.button} name='md-log-in'/>
                    <Text style={styles.button}>Account</Text>
                </Button>
            );
        }
    }

    render() {
        return (
            <Content style={styles.content}>

                {this.test()}
                {this.friendButtons(true)}

                <Button transparent iconLeft onPress={() => this.props.navigation.navigate("About")}>
                    <Icon style={styles.button} name='md-information-circle'/>
                    <Text style={styles.button}>About</Text>
                </Button>
                <Button transparent iconLeft onPress={() => this.props.navigation.navigate("Settings")}>
                    <Icon style={styles.button} name='cog'/>
                    <Text style={styles.button}>Settings</Text>
                </Button>

                {this.accountButton(User.isOnline())}

            </Content>
        );
    }

}
const styles = StyleSheet.create({
    content: {
        paddingLeft: 10,
        backgroundColor: "white",
    },
    button: {
        color: "#FF9800",
    }
});
