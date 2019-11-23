import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
export default class MainComponent extends Component {
  render() {
    return (
      <Button style={{flexDirection: "row",flex : 1}}>
        <View style={{flex: 2, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'blue'}} />
        <View style={{flex: 2, backgroundColor: 'black'}} />
      </Button>
    );
  }
}