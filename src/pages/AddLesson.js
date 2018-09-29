import React, {Component} from "react";
import {Button, Container,Picker} from "native-base";

import {navigationOptions, styles} from "../styles/common";
import {createHeaderButton} from "../components/Header";
import {Text, TextInput, View, TouchableOpacity, Keyboard, Image} from "react-native";
import DateTimePicker from 'react-native-modal-datetime-picker';
import {User} from "../model/User";
import {LessonHandler} from "../external/LessonHandler";
import ColorPicker from "../lib/ColorPicker";

export default class AddLesson extends Component {

    static navigationOptions = navigationOptions;

    state = {
        title: "",
        abbreviation: "",
        type: "",
        place: "",
        day: "Monday",
        startTime: new Date("0"),
        endTime: new Date("0"),
        colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#4050B5", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#607D8B"],
        selectedColor: '#4050B5',
        isStartTimePickerVisible: false,
        isEndTimePickerVisible: false,
        isKeyboardVisible: false,
    };

    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        return (
            <Container>
                {createHeaderButton("Add Lesson", () => this.props.navigation.goBack())}
                {this.logo()}

                <View style={styles.formContainer}>
                    <TextInput
                        returnKeyType={"next"}
                        placeholder={"Title"}
                        placeholderTextColor={"white"}
                        autoCapitalize={"words"}
                        style={styles.input}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        onChangeText={(value) => this.setState({title: value})}
                        onSubmitEditing={() => {this.abbreviationTextInput.focus();}}
                    />

                    <TextInput
                        returnKeyType={"next"}
                        placeholder={"Abbreviation"}
                        placeholderTextColor={"white"}
                        autoCapitalize={"characters"}
                        autoCorrect={false}
                        style={styles.input}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        onChangeText={(value) => this.setState({abbreviation: value})}
                        ref={(input) => {this.abbreviationTextInput = input;}}
                        onSubmitEditing={() => {this.typeTextInput.focus();}}
                    />

                    <TextInput
                        returnKeyType={"next"}
                        placeholder={"Type"}
                        placeholderTextColor={"white"}
                        autoCapitalize={"words"}
                        autoCorrect={false}
                        style={styles.input}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        onChangeText={(value) => this.setState({type: value})}
                        ref={(input) => {this.typeTextInput = input;}}
                        onSubmitEditing={() => {this.placeTextInput.focus();}}
                    />

                    <TextInput
                        returnKeyType={"done"}
                        placeholder={"Place"}
                        placeholderTextColor={"white"}
                        autoCorrect={false}
                        style={styles.input}
                        blurOnSubmit={false}
                        underlineColorAndroid={"rgba(0,0,0,0)"}
                        onChangeText={(value) => this.setState({place: value})}
                        ref={(input) => {this.placeTextInput = input;}}
                        onSubmitEditing={() => {Keyboard.dismiss();}}
                    />

                    {this.dayPicker()}
                    {this.timePicker()}
                    <View style={{bottom: "2%"}}>
                        <ColorPicker
                            colors={this.state.colors}
                            selectedColor={this.state.selectedColor}
                            onSelect={(color) => this.setState({selectedColor: color})}
                        />
                    </View>


                    <Button block onPress={()=> this.addLesson()} style={styles.button}>
                        <Text style={{color: "#FFF"}}>Submit Lesson</Text>
                    </Button>
                </View>

            </Container>
        );
    }

    logo() {
        if (this.state.isKeyboardVisible) return;
        return (
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../assets/timetable-logo.png")}/>
            </View>
        );
    }

    dayPicker() {
        return(
            <View style={styles.pickerView}>

                <Text style={styles.pickerText}>Pick A Day</Text>
                <Picker
                    selectedValue={this.state.day}
                    style={styles.picker}
                    onValueChange={(value) => this.setState({day: value})}>

                    <Picker.Item label="Monday" value="Monday"/>
                    <Picker.Item label="Tuesday" value="Tuesday"/>
                    <Picker.Item label="Wednesday" value="Wednesday"/>
                    <Picker.Item label="Thursday" value="Thursday"/>
                    <Picker.Item label="Friday" value="Friday"/>
                    <Picker.Item label="Saturday" value="Saturday"/>
                    <Picker.Item label="Sunday" value="Sunday"/>

                </Picker>
            </View>
        );
    }

    timePicker() {
        let options = {hour: "2-digit", minute: "2-digit"};
        return (

            <View style={styles.timePickerView}>
                <TouchableOpacity onPress={this._showStartTimePicker} style={styles.timePickerLeft}>
                    <Text style={styles.timePickerText}>Start Time: {this.state.startTime.toLocaleTimeString().substring(0,5)}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._showEndTimePicker} style={styles.timePickerRight}>
                    <Text style={styles.timePickerText}>End Time: {this.state.endTime.toLocaleTimeString().substring(0,5)}</Text>
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={this.state.isStartTimePickerVisible}
                    onConfirm={this._handleStartTimePicked}
                    onCancel={this._hideStartTimePicker}
                    mode="time"/>

                <DateTimePicker
                    isVisible={this.state.isEndTimePickerVisible}
                    onConfirm={this._handleEndTimePicked}
                    onCancel={this._hideEndTimePicker}
                    mode="time"/>

            </View>
        );
    }

    _keyboardDidShow  = () =>  this.setState({isKeyboardVisible: true});

    _keyboardDidHide  = () =>  this.setState({isKeyboardVisible: false});

    _showStartTimePicker = () => this.setState({ isStartTimePickerVisible: true });

    _hideStartTimePicker = () => this.setState({ isStartTimePickerVisible: false });

    _handleStartTimePicked = (date) => {
        this.setState({startTime: new Date(date)});
        this.forceUpdate();
        this._hideStartTimePicker();
    };

    _showEndTimePicker = () => this.setState({ isEndTimePickerVisible: true });

    _hideEndTimePicker = () => this.setState({ isEndTimePickerVisible: false });

    _handleEndTimePicked = (date) => {
        this.setState({endTime: new Date(date)});
        this.forceUpdate();
        this._hideEndTimePicker();
    };

    addLesson = () => {
        let lesson = {
            title: this.state.title,
            abbreviation: this.state.abbreviation,
            type: this.state.type,
            place: this.state.place,
            day: this.state.day.toString(),
            startTime: this.state.startTime.toLocaleTimeString().substring(0,2),
            endTime: this.state.endTime.toLocaleTimeString().substring(0,2),
            color: this.state.selectedColor,
        };
        User.addLesson(lesson);
        if (User.isOnline()) LessonHandler.saveLesson(lesson);
        this.props.navigation.navigate("WeekView");
    }


}
