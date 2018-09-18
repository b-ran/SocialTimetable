import {Container, Header, Left, Body, Right, Button, Icon, Title, Drawer} from "native-base"
import React, {Component} from "react";
import SideBar from "../components/Menu";
import {styles, navigationOptions} from "../styles/common";

export default class WeekView extends Component {

    static navigationOptions = navigationOptions;

    closeDrawer() {
        this._drawer._root.close();
    };

    openDrawer() {
        this._drawer._root.open();
    };

    render() {
        return (
            <Drawer
                ref={(ref) => {
                    this._drawer = ref;
                }}
                content={<SideBar navigation={this.props.navigation} navigator={this._navigator}/>}
                onClose={() => this.closeDrawer()}>

                <Container>
                    <Header style={styles.header}>
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Icon name="menu"/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>Week View</Title>
                        </Body>
                    </Header>
                </Container>
            </Drawer>
        );
    }


}


