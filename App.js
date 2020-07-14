import React, { Component } from 'react'
import { 
  View,
  Text
 } from 'react-native'
 import Splash from './src/screens/Splash'
 import SelectCity from './src/screens/SelectCity'
 import SignUp from './src/screens/SignUp'
 import EnterCode from './src/screens/EnterCode'
 
class App extends Component {
   render() {
       return <SelectCity/>
    }
}

export default App