import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Introduction2Image from '../../res/images/Introduction2.png';

export default function Introduction2() {
  return (
    <View style={styles.container}>
      <Image source={Introduction2Image} style={styles.image} />
      <Text style={styles.text1}>Book Appointments</Text>
      <Text style={styles.text2}>Book an appointment with a</Text>
      <Text style={styles.text2}>right doctor</Text>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
