import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
      title: 'Home'
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Mine Page"
          onPress={() => this.props.navigation.navigate('Mine', {
            userId: 88,
            otherParam: 'anything else you want'
          })}
        />
      </View>
    );
  }
}
