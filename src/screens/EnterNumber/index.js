import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import LeftIcon from '../../res/images/leftIcon.png';
import RightIcon from '../../res/images/rightIcon.png';
import Keypad from '../../components/Keypad';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import CrossIcon from '../../res/images/crossIcon.png';
import IdCardIcon from '../../res/images/idcardIcon.png';
function print(_number) {
  console.log(_number);
}

function EnterNumber() {
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={'#f6f6f6'}
        barStyle="light-content"
      />
      <View style={styles.topContainer}>
        <TouchableOpacity>
          <Image style={styles.crossIcon} source={CrossIcon} />
        </TouchableOpacity>
        <Image style={styles.idcardIcon} source={IdCardIcon} />
        <Text style={[styles.instructionText, {marginTop: 15}]}>
          Enter your mobile number we will send
        </Text>
        <Text style={styles.instructionText}>you the OTP to verify number</Text>
        <View style={styles.enterNumberContainer}>
          <View style={styles.numberContainer}>
            <View style={styles.codeContainer}>
              <Text style={styles.codeText}>+92</Text>
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputNumber}>03123082964</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.keypadContainer}>
        <View style={styles.keypadTopView}>
          <TouchableOpacity>
            <Image source={LeftIcon} style={styles.leftRightIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={RightIcon}
              style={[styles.leftRightIcon, {marginLeft: 35}]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContiner}>
            <Text style={styles.topViewText}>Done</Text>
          </TouchableOpacity>
        </View>
        <Keypad print={print} />
      </View>
    </View>
  );
}

export default EnterNumber;
