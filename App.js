import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './src/screens/Splash';
import SelectCity from './src/screens/SelectCity';
import SignUp from './src/screens/SignUp';
import EnterNumber from './src/screens/EnterNumber';
import EnterCode from './src/screens/EnterCode';
import Home from './src/screens/Home';
import Account from './src/screens/Account';
import Profile from './src/screens/Profile';
import SearchDoctor from './src/screens/SearchDoctor';
import Specialities from './src/screens/Specialities';
import TimeSlot from './src/screens/TimeSlot';
import Introduction1 from './src/screens/Introduction1';
import Introduction2 from './src/screens/Introduction2';
import Introduction3 from './src/screens/Introduction3';
import Estimation from './src/screens/Estimation';
import AllMedicines from './src/screens/AllMedicines';
import Cart from './src/screens/Cart';

const RootStack = createStackNavigator(
  {
    AllMedicines: {
      screen: AllMedicines,
    },
    Cart: {
      screen: Cart,
    },
  },
  {
    initialRouteName: 'AllMedicines',
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default createAppContainer(RootStack);
