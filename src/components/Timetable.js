import React, {Component} from "react";
import {Container, Icon, Left, List, ListItem, Text, Right, Col, Row, Grid, Content} from "native-base";
import {StyleSheet} from "react-native";

export default class Timetable extends Component  {

    props: {
        //weekDays: string[],
        //lessons: [],
        starHour: number,
        endHour: number,
    };


    state = {
        times: [],
        weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    };

    render() {
        this.populateTimes();
        const {
            //weekDays,
            //lessons,
            starHour,
            endHour,
        } = this.props;
        const {
            times,
            weekDays,
        } = this.state;
        return(
            <Container  style={styles.container}>
                <Content>
                    <Grid style={styles.grid}>
                        <Col style={styles.timeCol}>
                            {times.map((item, key)=>(
                                <Row style={styles.timeRow}>
                                    <Text style={styles.timeText} key={key}>{item+":00"}</Text>
                                </Row>
                            ))}
                        </Col>
                        {weekDays.map((item, key)=>(
                            <Col>
                                <Row>
                                    <Text key={key}>{item}</Text>
                                </Row>
                            </Col>
                        ))}
                    </Grid>
                </Content>
            </Container>

        );
    }


    populateTimes() {
        this.state.times = [];
        for (let i = this.props.starHour; i < this.props.endHour+1; i++) {
            this.state.times.push(i);
        }
        console.log(this.state.times);
    }

}

const styles = StyleSheet.create({

    container: {
        flexGrow: 10,
    },
    grid: {
        height: 600,
    },
    timeCol: {
        top: "5%",
        left: "2.5%",
        height: 500,
    },
    timeRow: {


        //marginBottom: "10%",
    },
    timeText: {
       // marginBottom: "10%",
        fontSize: 12,
    },

});
