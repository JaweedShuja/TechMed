import React, {useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

function Test() {
  const [selectedScreen, setSelectedScreen] = useState('one');
  if (selectedScreen == 'one') {
    return (
      <View>
        <Text>this is screen 1</Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'red',
          }}
          onPress={() => {
            console.log(selectedScreen);
            setSelectedScreen('two');
          }}></TouchableOpacity>
      </View>
    );
  } else if (selectedScreen == 'two') {
    return (
      <View>
        <Text>this is screen 2</Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'red',
          }}
          onPress={() => {
            console.log(selectedScreen);
            setSelectedScreen('one');
          }}></TouchableOpacity>
      </View>
    );
  }
}
export default Test;

Test.navigationOptions = {
  headerShown: false,
};
