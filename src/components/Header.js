import {Body, Button, Header, Icon, Left, Title} from "native-base";
import {styles} from "../styles/common";
import React from "react";



export function createHeaderButton(title, onPress, iconName = "arrow-back") {
    return (

            <Header style={styles.header}>
                <Left>
                    <Button transparent onPress={onPress}>
                        <Icon name={iconName}/>
                    </Button>
                </Left>
                <Body>
                <Title>{title}</Title>
                </Body>
            </Header>

    );
}
