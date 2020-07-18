import React, {useState} from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import styles from './style';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';
import BackArrowIcon from '../../res/images/backArrowIcon.png';
import DownIcon from '../../res/images/downIcon.png';
import DoctorImage from '../../res/images/doctorImage.png';
import UserIcon from '../../res/images/userIcon.png';
import Pin from '../../res/images/pin.png';

export default function Specialities() {
  const [doctorOptions, setDoctorOptions] = useState([
    'Availabilty',
    'in Hospital',
    'Online Booking',
    'Online Consultation',
  ]);
  const [doctorData, setDoctorDate] = useState([
    {
      id: 1,
      name: 'Zean Ronen',
      qualication: 'MBBS,DOMS,MS - Ophthalmology',
      speciality: 'Ophthaimologist',
      exp: '25 years of experience',
      votes: '26',
      totalFeedbacks: '95',
      totalDoctor: '1',
      addr: 'Gulshan-e-Iqbal',
      fee: '500',
      surgeries: ['LASIC Eye Surgery', 'Anterior Surgery', 'Heart Surgery'],
      successRate: '95',
    },
    {
      id: 2,
      name: 'Jaweed',
      qualication: 'MBBS,DOMS,MS - Ophthalmology',
      speciality: 'Ophthaimologist',
      exp: '25 years of experience',
      votes: '26',
      totalFeedbacks: '95',
      totalDoctor: '1',
      addr: 'Gulshan-e-Iqbal',
      fee: '500',
      surgeries: ['LASIC Eye Surgery', 'Anterior Surgery', 'Heart Surgery'],
      successRate: '95',
    },
  ]);
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={Colors.Green}
        barStyle="light-content"
      />
      <View style={styles.topContainer}>
        <View style={styles.childContainer}>
          <Image style={styles.crossIcon} source={BackArrowIcon} />
          <Text style={styles.doctorText}>Ophthalmology</Text>
          <View style={styles.changeCityContainer}>
            <Text style={styles.cityText}>Karachi</Text>
            <Image source={DownIcon} style={styles.downIcon} />
          </View>
        </View>
        <View style={styles.searchBarContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={doctorOptions => doctorOptions}
            data={doctorOptions}
            renderItem={({item}) => {
              return (
                <View style={styles.optionContainer}>
                  <Text style={styles.optionText}>{item}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={{height: 30}}></View>
      <FlatList
        keyExtractor={doctorData => doctorData.id}
        data={doctorData}
        renderItem={({item}) => {
          return (
            <View style={styles.doctorDataContainer}>
              <View style={{flex: 3, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 70,
                      alignSelf: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      style={{height: '100%', width: '100%'}}
                      source={DoctorImage}
                    />
                    <View
                      style={{
                        height: 25,
                        width: 25,
                        backgroundColor: 'lightgreen',
                        borderRadius: 70,
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        margin: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 9, color: 'white'}}>
                        {item.successRate} %
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontFamily: Fonts.Regular,
                      alignSelf: 'center',
                      color: Colors.GrayMedium,
                    }}>
                    {item.votes} Votes
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.SemiBold,
                      alignSelf: 'center',
                      color: Colors.GrayDark,
                    }}>
                    {item.totalFeedbacks} feedback
                  </Text>
                </View>
                <View style={{flex: 2}}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginTop: 10,
                      fontFamily: Fonts.SemiBold,
                      color: Colors.GrayDark,
                    }}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      height: 80,
                      width: '95%',
                      borderWidth: 1,
                      borderColor: Colors.WhiteSmoke,
                      borderRadius: 5,
                      justifyContent: 'space-around',
                      paddingVertical: 10,
                    }}>
                    <Text
                      style={{
                        fontFamily: Fonts.SemiBold,
                        fontSize: 10,
                        marginLeft: 10,
                        color: Colors.GrayMedium,
                      }}>
                      {item.qualication}
                    </Text>
                    <Text
                      style={{
                        fontFamily: Fonts.SemiBold,
                        fontSize: 10,
                        marginLeft: 10,
                        color: Colors.GrayMedium,
                      }}>
                      {item.speciality}
                    </Text>
                    <Text
                      style={{
                        fontFamily: Fonts.SemiBold,
                        fontSize: 10,
                        marginLeft: 10,
                        color: Colors.GrayMedium,
                      }}>
                      {item.exp}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '90%',
                      marginTop: 5,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={UserIcon}
                        style={{
                          height: 15,
                          width: 15,
                          tintColor: Colors.GrayMedium,
                        }}
                      />
                      <Text
                        style={{
                          color: Colors.GrayMedium,
                          marginLeft: 5,
                          fontFamily: Fonts.Regular,
                          fontSize: 12,
                          marginTop: 3,
                        }}>
                        {item.totalDoctor} Doctor
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={Pin}
                        style={{
                          height: 20,
                          width: 20,
                          tintColor: Colors.GrayMedium,
                        }}
                      />
                      <Text
                        style={{
                          color: Colors.GrayMedium,
                          fontFamily: Fonts.Regular,
                          fontSize: 12,
                          marginLeft: 1,
                          marginTop: 3,
                        }}>
                        {item.addr}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontFamily: Fonts.SemiBold,
                      color: Colors.GrayDark,
                      marginTop: 5,
                      fontSize: 12,
                    }}>
                    Rs {item.fee} onwards
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row', width: '95%'}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {item.surgeries.map(item => {
                    return (
                      <View
                        style={{
                          backgroundColor: Colors.White,
                          margin: 12,
                          //borderWidth: 1,
                          //borderColor: Colors.GrayDim,
                          borderRadius: 30,
                          padding: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 1,
                          },
                          shadowOpacity: 0.2,
                          shadowRadius: 1.41,

                          elevation: 2,
                        }}>
                        <Text
                          style={{
                            fontFamily: Fonts.SemiBold,
                            fontSize: 10,
                            color: Colors.GrayMedium,
                          }}>
                          {item.slice(0, 12)}...
                        </Text>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    height: 35,
                    width: 130,
                    backgroundColor: 'rgba(255,0,0,0.3)',
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.SemiBold,
                      color: 'yellow',
                    }}>
                    SPONSORED
                  </Text>
                </View>
                <View
                  style={{
                    height: 40,
                    width: 150,
                    borderWidth: 1,
                    borderColor: Colors.Blue,
                    borderRadius: 30,
                    marginTop: 5,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    right: 10,
                  }}>
                  <Text style={{fontFamily: Fonts.SemiBold, color: 'blue'}}>
                    Contact Clinic
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
