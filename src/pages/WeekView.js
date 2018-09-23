import {Container, Drawer, Content, Fab, View, Icon} from "native-base"
import React, {Component} from "react";
import SideBar from "../components/Menu";
import {styles, navigationOptions} from "../styles/common";
import {createHeaderButton} from "../components/Header";
import {User} from "../model/User";

export default class WeekView extends Component {

    static navigationOptions = navigationOptions;

    componentDidMount() {
        this.props.navigation.addListener(
            "willFocus",
            payload => {
                this.forceUpdate();
            }
        )
    }

    closeDrawer() {
        this._drawer._root.close();
    }

    openDrawer() {
        this._drawer._root.open();
    }

    render() {
        return (
            <Drawer
                ref={(ref) => {
                    this._drawer = ref;
                }}
                content={<SideBar navigation={this.props.navigation} navigator={this.navigator} closeDrawer={()=> this.closeDrawer()}/>}
                onClose={() => this.closeDrawer()}>

                <Container>
                    {this.statusMenu()}
                </Container>

                    <Fab
                        active={true}
                        direction="up"
                        containerStyle={{}}
                        style={styles.fab}
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate("AddLesson")}>
                        <Icon name="add" />
                    </Fab>


            </Drawer>
        );
    }

    statusMenu() {
        if (User.isOnline()) {
            return(
              <Content>
                  {createHeaderButton("Week View", () => this.openDrawer(), "menu")}
              </Content>
            );
        }
        return(
            <Content>
                {createHeaderButton("Week View", () => this.props.navigation.navigate("Login"), "menu")}
            </Content>
        );
    }



}


