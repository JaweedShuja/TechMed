import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './style';
import BackArrowIcon from '../../res/images/backArrowIcon.png';
import DoctorImage from '../../res/images/doctorImage.png';
import StarIcon from '../../res/images/starIcon.png';
import Hospital1 from '../../res/images/hospital1.jpeg';
import Hospital2 from '../../res/images/hospital2.jpeg';
import Hospital3 from '../../res/images/hospital3.jpeg';
import Hospital4 from '../../res/images/hospital4.jpeg';
import Hospital5 from '../../res/images/hospital5.jpeg';
import Map from '../../res/images/map.jpeg';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';

let Hospitals = [Hospital1, Hospital2, Hospital3, Hospital4, Hospital5];

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundView}></View>
      <Image style={styles.backArrowIcon} source={BackArrowIcon} />
      <View style={styles.profilContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.doctorImage} source={DoctorImage} />
        </View>
        <Text style={styles.primeText}>Prime</Text>
        <View style={styles.ratingContainer}>
          <Image source={StarIcon} style={styles.starIcon} />
          <Text style={styles.rating}>4.2</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.nameText}>Dr. Jitendar Raut</Text>
          <Text style={styles.desText}>B.Sc,MBBS, DDVL, MD- Dermitologist</Text>
          <View style={styles.expContainer}>
            <Text>
              <Text style={styles.boldText}>16</Text>
              <Text style={styles.normalText}> yrs. Experience</Text>
            </Text>
            <Text>
              <Text style={styles.boldText}>89%</Text>
              <Text style={styles.normalText}> (4384 votes)</Text>
            </Text>
          </View>
          <View style={styles.imagesContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {Hospitals.map(item => {
                return <Image style={styles.image} source={item} />;
              })}
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView
          style={{height: '100%', width: '100%'}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.feesContainer}>
            <Text>
              <Text style={styles.feeText1}>In Clinic Fees:</Text>
              <Text style={styles.feeText2}> $10</Text>
            </Text>
            <TouchableOpacity style={styles.bookButtonSmall}>
              <Text style={styles.bookButtonSmallText}>Book</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText1}>CLOSED TODAY</Text>
            <Text style={styles.timeText2}>9:30AM - 08:30PM </Text>
            <Text style={styles.timeText3}>All Timining</Text>
          </View>
          <Text style={styles.addressText}>
            92/6, 3rd Floor, Outer Ring Rood, Chandra Layout
          </Text>

          <Image source={Map} style={styles.mapImage} />
          <View style={styles.line}></View>

          <Text style={[styles.feedbackHeading, {marginTop: 20}]}>
            FEEDBACK
          </Text>
          <Text style={styles.feedBack}>
            Very good, courteous and efficient staff,
          </Text>
          <Text style={[styles.feedbackHeading, {marginTop: 20}]}>
            SERVICES
          </Text>
          <Text style={styles.feedBack}>Ophthalmology</Text>
          <Text style={styles.feedBack}>Giaucoma</Text>
          <Text style={styles.feedBack}>Cataract</Text>
          <Text style={[styles.allServicesHeading, {marginTop: 10}]}>
            ALL SERVICES
          </Text>
          <Text style={[styles.feedbackHeading, {marginTop: 20}]}>
            SPECIALIZATION
          </Text>
          <Text style={styles.feedBack}>Dermitologist</Text>
          <Text style={styles.feedBack}>Trichologist</Text>
          <Text style={styles.feedBack}>Cosmetologist</Text>

          <View style={styles.line}></View>

          <View style={styles.varificationContainer}>
            <View style={styles.verifiedRound}></View>
            <Text style={styles.feedbackHeading}>VERIFICATION DONE FOR</Text>
          </View>
          <Text style={styles.feedBack}>-Medical License</Text>
          <Text style={[styles.feedbackHeading, {marginTop: 20}]}>
            ALSO PRACTICES AT
          </Text>

          <View
            style={{
              marginTop: 20,
              height: 100,
              marginHorizontal: 20,
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: Colors.WhiteSmoke,
            }}>
            <View style={{flex: 1, alignItems: 'center', marginTop: 15}}>
              <Image style={{height: 50, width: 50}} source={DoctorImage} />
            </View>
            <View style={{flex: 3, justifyContent: 'center'}}>
              <Text
                style={{
                  color: Colors.GrayDark,
                  fontFamily: Fonts.SemiBold,
                }}>
                Dr. Zan Chau
              </Text>
              <Text
                style={{
                  color: Colors.GrayMedium,
                  fontFamily: Fonts.SemiBold,
                }}>
                Dermatologist
              </Text>
              <Text
                style={{
                  color: Colors.GrayDark,
                  fontFamily: Fonts.SemiBold,
                }}>
                $ 30
              </Text>
            </View>
            <View style={{flex: 1, marginVertical: 10}}>
              <View style={styles.ratingContainer}>
                <Image source={StarIcon} style={styles.starIcon} />
                <Text style={styles.rating}>4.2</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              height: 100,
              marginHorizontal: 20,
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: Colors.WhiteSmoke,
            }}>
            <View style={{flex: 1, alignItems: 'center', marginTop: 15}}>
              <Image style={{height: 50, width: 50}} source={DoctorImage} />
            </View>
            <View style={{flex: 3, justifyContent: 'center'}}>
              <Text
                style={{
                  color: Colors.GrayDark,
                  fontFamily: Fonts.SemiBold,
                }}>
                Dr. Rina Dome
              </Text>
              <Text
                style={{
                  color: Colors.GrayMedium,
                  fontFamily: Fonts.SemiBold,
                }}>
                Dermatologist
              </Text>
              <Text
                style={{
                  color: Colors.GrayDark,
                  fontFamily: Fonts.SemiBold,
                }}>
                $ 30
              </Text>
            </View>
            <View style={{flex: 1, marginVertical: 10}}>
              <View style={styles.ratingContainer}>
                <Image source={StarIcon} style={styles.starIcon} />
                <Text style={styles.rating}>4.2</Text>
              </View>
            </View>
          </View>
          <View style={{height: 100}}></View>
        </ScrollView>
      </View>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookText}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feedBackConatainer}>
          <Text style={styles.feedbackText}>Give Feedback</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
