import React, {useState} from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import styles from './style';
import * as Colors from '../../res/values/colors';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import NavBar from '../../components/NavBar';

import DownIcon from '../../res/images/downIcon.png';
import Doctors from '../../res/images/doctors.jpg';
import DoctorCapIcon from '../../res/images/doctorCapIcon.png';
import MedicinesIcon from '../../res/images/medicinesIcon.png';
import DigonosticIcon from '../../res/images/digonosticIcon.png';

import HomeIcon from '../../res/images/homeIcon.png';
import ChatIcon from '../../res/images/chatIcon.png';
import UserIcon from '../../res/images/userIcon.png';
import StarIcon from '../../res/images/starIcon.png';

import DoctorImage from '../../res/images/doctorImage.png';

let doctorsData = [
  {
    id: 1,
    name: 'Dr, Jaweed',
    desc: 'Heart Sergion mbbs from aga khan university',
    rating: '4.9',
  },
  {
    id: 2,
    name: 'Dr. Atiq',
    desc: 'Brain Sergion masters in brain sergory from Al-Fateem',
    rating: '4.9',
  },
  {
    id: 3,
    name: 'Dr. Talha',
    desc: 'OPD Specialist from Indus unvivesity',
    rating: '4.9',
  },
  {
    id: 4,
    name: 'Dr. Owaise',
    desc: 'Child Specialist mbba from Jetnetix',
    rating: '4.9',
  },
];

let doctorsView = [];
for (let i = 0; i < doctorsData.length; i++) {
  doctorsView.push(
    <View style={styles.doctorContainer}>
      <Image style={styles.doctorImage} source={DoctorImage} />
      <Text style={styles.doctorName}>{doctorsData[i].name}</Text>
      <Text style={styles.doctorDesc}>{doctorsData[i].desc}</Text>
      <View style={styles.ratingContainer}>
        <Image style={styles.starIcon} source={StarIcon} />
        <Text style={styles.doctorRating}>{doctorsData[i].rating}</Text>
      </View>
    </View>,
  );
}
export default function Home() {
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={Colors.Green}
        barStyle="light-content"
      />

      <View style={styles.topContainer}>
        <View style={styles.topTextContainer}>
          <Text style={styles.appText}>TechMed</Text>
          <View style={styles.changeCityContainer}>
            <Text style={styles.cityText}>Karachi</Text>
            <Image source={DownIcon} style={styles.downIcon} />
          </View>
        </View>
        <View style={styles.roungIconContainer}>
          <View style={styles.round}>
            <Image source={DoctorCapIcon} style={styles.roundImage} />
          </View>
          <View style={styles.round}>
            <Image source={MedicinesIcon} style={styles.roundImage} />
          </View>
          <View style={styles.round}>
            <Image source={DigonosticIcon} style={styles.roundImage} />
          </View>
        </View>
      </View>
      <View style={styles.roundTextContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Doctor</Text>
          <Text style={styles.desText}>Search doctor around you</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Medicines</Text>
          <Text style={styles.desText}>Order medicines to home</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Digonostic</Text>
          <View style={{marginLeft: 10}}>
            <Text style={styles.desText}>Book test at doorstep</Text>
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={Doctors} style={styles.doctors} />
      </View>
      <View style={styles.nearByDoctorsContainer}>
        <View style={styles.nearByTextContainer}>
          <Text style={styles.nearByText}>Doctors nearby you</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {doctorsView}
        </ScrollView>
      </View>
      <NavBar
        nav={{nav1: Colors.Blue, nav2: Colors.GrayDim, nav3: Colors.GrayDim}}
      />
    </View>
  );
}
