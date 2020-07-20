import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import CrossIcon from '../../res/images/crossIcon.png';

export default function Estimation() {
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={Colors.Green}
        barStyle="light-content"
      />
      <View style={styles.topContainer}>
        <Image source={CrossIcon} style={styles.crossIcon} />
        <Text style={styles.bookText}>Book test & packages online...</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.item}>
          <Text>T3:T4-TSH</Text>
        </View>
      </View>
    </View>
  );
}
