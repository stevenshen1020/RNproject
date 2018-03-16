import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class MineScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Mine',
      headerLeft: (
        <Button title='Done' onPress={() => navigation('Home')} />
      ),
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      )
    }
  }
  render() {
    const {params} = this.props.navigation.state
    const userId = params ? params.userId : null
    const otherParam = params ? params.otherParam : null

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Mine Screen</Text>
        <Text>User Id: {JSON.stringify(userId)}</Text>
        <Text>Other Params: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Mine... again"
          onPress={() => this.props.navigation.navigate('Mine')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}
