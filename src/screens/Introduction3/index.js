import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Introduction3Image from '../../res/images/Introduction3.png';

export default function Introduction3() {
  return (
    <View style={styles.container}>
      <Image source={Introduction3Image} style={styles.image} />
      <Text style={styles.text1}>Book Diagonostic</Text>
      <Text style={styles.text2}>Search and book diagnostic</Text>
      <Text style={styles.text2}>test</Text>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
