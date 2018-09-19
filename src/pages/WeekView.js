import {Container, Header, Left, Body, Right, Button, Icon, Title, Drawer} from "native-base"
import React, {Component} from "react";
import SideBar from "../components/Menu";
import {styles, navigationOptions} from "../styles/common";
import {createHeaderButton} from "../components/Header";

export default class WeekView extends Component {

    static navigationOptions = navigationOptions;

    componentDidMount() {

    }

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
                    {createHeaderButton("Week View", () => this.openDrawer(), "menu")}
                </Container>



            </Drawer>
        );
    }


}


