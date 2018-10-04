import React, {Component} from "react";
import {Container, Icon, Left, List, ListItem, Text, Right, Col, Row, Grid, Content} from "native-base";
import {StyleSheet, View} from "react-native";





export default class Timetable extends Component  {

    props: {
        lessons: [],
        starHour: number,
        endHour: number,
    };

    state = {
        times: [],
        weekDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    };

    viewHeight = 600;

    render() {
        this.populateTimes();
        const {
            lessons,
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
                        {weekDays.map((day, key)=>(
                            <Col onLayout={(event)=> {this.setViewSize(event.nativeEvent.layout)}}>
                                <Row>
                                    <Text key={key} style={{left: "1.5%"}}>{day.substring(0,2)}</Text>
                                </Row>
                                {this.getLessonsOnDay(day, lessons).map((lesson, key)=> (
                                    <View style={this.getLessonStyle(lesson)}>
                                        <Text key={key} style={{color: "white"}}>{lesson.abbreviation}</Text>
                                    </View>

                                ))}
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
    }

    getLessonStyle(lesson) {
        const {
            starHour,
            endHour,
        } = this.props;
        let range = endHour - starHour;
        let lessonHourRange: number = parseInt(lesson.endTime) - parseInt(lesson.startTime);
        let lessonHeight = (this.viewHeight / range) * lessonHourRange;
        let position = this.viewHeight-((this.viewHeight / range) * (lesson.endTime-starHour));
        //console.log(lesson.abbreviation, position, this.viewHeight);

        let styles = StyleSheet.create({
            row: {
                backgroundColor: lesson.color,
                height: lessonHeight,
                bottom: position-25,
                width: "90%",
                position:'absolute',
                alignSelf:'flex-end',
            }
        });
        return styles.row;
    }

    getLessonsOnDay(day: string, lessons: []) {
        let lessonsOnDay: [] = [];
        if (lessons.length >= 0) {
            for(let i = 0; i < lessons.length; i++) {
                if (lessons[i].day === day) {
                    lessonsOnDay.push(lessons[i]);
                }
            }
        }
        lessonsOnDay.sort((a,b) => {return b.endTime - a.endTime});
        return lessonsOnDay;
    }

    setViewSize(layout) {
        const {x, y, width, height} = layout;
        this.viewHeight = height;
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
        top: "10%",
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
