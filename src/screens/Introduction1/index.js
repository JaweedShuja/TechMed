import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Introduction1Image from '../../res/images/Introduction1.png';

export default function Introduction1() {
  return (
    <View style={styles.container}>
      <Image source={Introduction1Image} style={styles.image} />
      <Text style={styles.text1}>Search Doctors</Text>
      <Text style={styles.text2}>Get list of best doctor</Text>
      <Text style={styles.text2}>nearby you</Text>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
