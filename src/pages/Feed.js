import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import camera from '../assets/camera.png';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = ({navigation}) => ({
    headerRight: (
        <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.navigate('New')}>
            <Image source={camera}></Image>
        </TouchableOpacity>
    ),
  })

  render() {
    return (
      <View>
        <Text> Feed </Text>
      </View>
    );
  }
}
