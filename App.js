import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import Chart from './src/Components/Chart';
import HomeScreen from './src/Screens/HomeScreen';
import TradeDetails from './src/Screens/TradeDetails';
import {StackNavigator} from 'react-navigation';

import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return <RootStack/>
  }
}




const RootStack = StackNavigator(
    {
      Home: {
        screen:  HomeScreen,
      },

      Details: {
        screen: TradeDetails,
      },

    },
    {
      initialRouteName: 'Home'
    }
);