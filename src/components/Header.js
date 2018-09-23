import {Body, Button, Header, Icon, Left, Title} from "native-base";
import {styles} from "../styles/common";
import React from "react";



export function createHeaderButton(title, onPress, iconName = "arrow-back") {
    return (

            <Header>
                <Left>
                    <Button transparent onPress={onPress}>
                        <Icon name={iconName}/>
                    </Button>

                </Left>
                <Body style={{right: "80%"}}>
                    <Title>{title}</Title>
                </Body>
            </Header>

    );
}
