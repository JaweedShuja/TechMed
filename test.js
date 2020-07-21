import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class test extends React.Component {
  constructor(props) {
    super(props);
    //0 open
    //1 close
    this.state = {
      width: 0,
      check: 0,
    };
    this.open = this.open.bind(this);
  }
  open() {
    if (this.state.check == 0) {
      this.setState({
        check: 1,
      });
      var t = setInterval(() => {
        this.setState({
          width: this.state.width + 20,
        });
        if (this.state.width >= 200) {
          clearInterval(t);
        }
      }, 10);
    } else if (this.state.check == 1) {
      this.setState({check: 0});
      var t = setInterval(() => {
        this.setState({
          width: this.state.width - 20,
        });
        if (this.state.width <= 0) {
          clearInterval(t);
        }
      }, 10);
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.open()}
          style={{backgroundColor: 'lightblue', padding: 10, width: 100}}>
          <Text>Open Slider</Text>
        </TouchableOpacity>
        <View
          style={{
            height: 300,
            width: this.state.width,
            backgroundColor: 'red',
            position: 'absolute',
            marginTop: 100,
          }}>
          <TouchableOpacity
            onPress={() => this.open()}
            style={{backgroundColor: 'lightblue', padding: 10, width: 100}}>
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
