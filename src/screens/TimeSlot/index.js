import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import BookButton from '../../components/BookButton';
import BackArrowIcon from '../../res/images/backArrowIcon.png';
import DownIcon from '../../res/images/downIcon.png';
import DoctorImage from '../../res/images/doctorImage.png';
import LeftIcon from '../../res/images/leftIcon.png';
import RightIcon from '../../res/images/rightIcon.png';

function TimeSlot() {
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={Colors.Green}
        barStyle="light-content"
      />
      <View style={styles.topContainer}>
        <View style={styles.childContainer}>
          <Image style={styles.crossIcon} source={BackArrowIcon} />
          <Text style={styles.doctorText}>Select a time slot</Text>
          <View style={styles.changeCityContainer}>
            <Text style={styles.cityText}>Karachi</Text>
            <Image source={DownIcon} style={styles.downIcon} />
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.profileContainer}>
          <Image source={DoctorImage} style={styles.doctorImage} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Dr. Arsal Jaweed</Text>
            <Text style={styles.qualification}>
              B.Sc, MBBS, DDVL, MD-Dermitologist
            </Text>
          </View>
        </View>
        <View style={styles.dayContainer}>
          <View style={styles.lrContaienr}>
            <Image source={LeftIcon} style={styles.lrIcon} />
          </View>
          <Text style style={styles.dayText}>
            Tommorow, 9 Dec
          </Text>
          <View style={styles.lrContaienr}>
            <Image source={RightIcon} style={styles.lrIcon} />
          </View>
        </View>
        <View style={styles.morningContainer}>
          <View style={[styles.morningLabel, {width: 100}]}>
            <Text style={styles.morningText}>Morning</Text>
          </View>
          <View style={styles.timeContianer}>
            <Text style={styles.time}>10:00</Text>
            <Text style={styles.time}>11:00</Text>
            <Text style={styles.time}>12:00</Text>
          </View>
        </View>
        <View style={styles.morningContainer}>
          <View style={[styles.morningLabel, {width: 100}]}>
            <Text style={styles.morningText}>Afternoon</Text>
          </View>
          <View style={styles.timeContianer}>
            <Text style={styles.time}>12:00</Text>
            <Text style={styles.time}>01:00</Text>
            <Text style={styles.time}>02:00</Text>
            <Text style={styles.time}>03:00</Text>
            <Text style={styles.time}>04:00</Text>
          </View>
        </View>
        <View style={styles.morningContainer}>
          <View style={[styles.morningLabel, {width: 140}]}>
            <Text style={styles.morningText}>Evening & Night</Text>
          </View>
          <View style={styles.timeContianer}>
            <Text style={styles.time}>05:00</Text>
            <Text style={styles.time}>06:00</Text>
            <Text style={styles.time}>07:00</Text>
            <Text style={styles.time}>08:00</Text>
            <Text style={styles.time}>09:00</Text>
            <Text style={styles.time}>10:00</Text>
          </View>
        </View>
      </View>
      <BookButton />
    </View>
  );
}

export default TimeSlot;
