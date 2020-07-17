import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import NavBar from '../../components/NavBar';
import * as Colors from '../../res/values/colors';
import UserIcon from '../../res/images/userIcon.png';
import SettingsIcon from '../../res/images/settingsIcon.png';
import DoctorImage from '../../res/images/doctorImage.png';
import ForwardIcon from '../../res/images/forwardIcon.webp';
// import {Icon} from 'react-native-elements';

export default function Account() {
  const [optionItems, setOptionItems] = useState([
    {id: 1, name: 'My Doctors'},
    {id: 2, name: 'Appointments'},
    {id: 3, name: 'Online consultation'},
    {id: 4, name: 'Medical Records'},
    {id: 5, name: 'Reminders'},
  ]);
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={'#f6f6f6'}
        barStyle="light-content"
      />
      <View style={styles.profileContainer}>
        <View style={styles.topIconContainer}>
          <Image source={UserIcon} style={styles.topIcon} />
          <Image source={SettingsIcon} style={styles.topIcon} />
        </View>
        <Image source={DoctorImage} style={styles.doctorImage} />
        <View style={styles.detailsConainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Jitendra Raut</Text>
            <Text style={styles.numbere}>090078001</Text>
          </View>
          <View style={styles.barContainer}>
            <Text style={styles.barPer}>25%</Text>
            <View style={styles.bar}>
              <View style={styles.barFil}></View>
            </View>
          </View>
          <TouchableOpacity style={styles.completProfileButton}>
            <Text style={styles.buttonText}>Complete your profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <FlatList
          keyExtractor={item => item.id}
          data={optionItems}
          renderItem={({item}) => (
            <View style={styles.optionContainer}>
              <Image source={UserIcon} style={styles.optionImage} />
              {/* <Icon name="sc-telegram" type="evilicon" color="#517fa4" /> */}
              <Text style={styles.optionText}>{item.name}</Text>
              <Image source={ForwardIcon} style={styles.forwardIcon} />
            </View>
          )}
        />
      </View>
      <NavBar
        nav={{nav1: Colors.GrayDim, nav2: Colors.GrayDim, nav3: Colors.Blue}}
      />
    </View>
  );
}
