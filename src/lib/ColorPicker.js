//Credit: https://github.com/thakurballary/react-native-status-color-picker#readme
//Changed to be compatible metro building and not expo allowed under MIT licence of react-native-status-color-picker repo

import React, { Component } from 'react';
import { FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

export default class ColorPicker extends Component {
  state = {
    colors: this.props.colors,
    selectedColor: this.props.selectedColor,
  };

  renderItem = ({ item }) => {
    return (
    <TouchableOpacity
      style={[styles.circle, { backgroundColor: item }]}
      onPress={() => {
        this.setState({ selectedColor: item });
        this.props.onSelect(item);
      }}>
      {this.state.selectedColor === item &&
        <Icon name="checkmark" style={{ color: "white", fontSize: 24 }} />}
    </TouchableOpacity>
  )};

  _keyExtractor = (item, index) => index;

  render() {
    return (
      <FlatList
        data={this.state.colors}
        extraData={this.state}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        horizontal={true}
        keyboardShouldPersistTaps="always"
        style={{ maxHeight: 75 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
