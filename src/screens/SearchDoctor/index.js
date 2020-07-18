import React, {useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './style';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import * as Colors from '../../res/values/colors';
import CrossIcon from '../../res/images/crossIcon.png';
import SearchIcon from '../../res/images/searchIcon.png';
import * as Fonts from '../../res/values/fonts';

export default function SearchDoctor() {
  const [specialities, setSpecialities] = useState([
    'Ophthaimologist',
    'Dermatologist',
    'Cardiologist',
    'Gastroenterologist',
    'Pshychiotrist',
    'Ear-nose-Throat (ENT) Specialist',
    'Gynecologist/Obstetrician',
    'Neurologist',
  ]);
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={Colors.Green}
        barStyle="light-content"
      />
      <View style={styles.topContainer}>
        <View style={styles.childContainer}>
          <Image style={styles.crossIcon} source={CrossIcon} />
          <Text style={styles.doctorText}>Doctors</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <Image
            style={{
              height: 25,
              width: 25,
              tintColor: Colors.GrayMedium,
              alignSelf: 'center',
              marginLeft: 10,
            }}
            source={SearchIcon}
          />
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              alignSelf: 'center',
              marginLeft: 10,
              color: Colors.GrayMedium,
            }}>
            Doctors, specialities, clinics
          </Text>
        </View>
      </View>
      <Text style={styles.topText}>Top specialities</Text>
      <View style={styles.bottomContainer}>
        <FlatList
          keyExtractor={specialities => specialities}
          data={specialities}
          renderItem={({item}) => {
            return (
              <View style={styles.dataContainer}>
                <Text style={styles.dataText}>{item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
