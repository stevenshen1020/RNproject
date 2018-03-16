import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class UnlockScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { /* other code from before here */ }
        <Text style={{ fontSize: 30 }}>Unlock</Text>
      </View>
    );
  }
}