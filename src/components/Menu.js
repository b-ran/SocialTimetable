import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Content, Button, Icon, Text} from "native-base"


export default class Menu extends Component {

    render() {
        return(
            <Content style={styles.content}>

                    <Button transparent iconLeft>
                        <Icon style={styles.button} name='md-person-add'/>
                        <Text style={styles.button}>Add Friends</Text>
                    </Button>

                    <Button transparent iconLeft>
                        <Icon style={styles.button} name='md-people'/>
                        <Text style={styles.button}>All Friends</Text>
                    </Button>

                    <Button transparent iconLeft>
                        <Icon style={styles.button} name='md-information-circle'/>
                        <Text style={styles.button}>About</Text>
                    </Button>
                    <Button transparent iconLeft onPress={() => this.props.navigation.navigate("Login")}>
                        <Icon style={styles.button} name='md-log-in'/>
                        <Text style={styles.button}>Account</Text>
                    </Button>
                    <Button transparent iconLeft>
                        <Icon style={styles.button} name='cog' />
                        <Text style={styles.button}>Settings</Text>
                    </Button>
                    <Button transparent iconLeft>
                        <Icon style={styles.button} name='md-log-out'/>
                        <Text style={styles.button}>Sign Out</Text>
                    </Button>
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
