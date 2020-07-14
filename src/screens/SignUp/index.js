import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import styles from './style'
import * as Colors from '../../res/values/colors'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';

function SignUp(){
    return <View style={styles.container}>
        <GeneralStatusBarColor backgroundColor={Colors.Green} barStyle="light-content"/>
        <View
        style={styles.topContainer}>
            <Text style={styles.topContainerText}>
                TechMed
            </Text>
        </View>
        <View
        style={styles.bottomContainer}>
            <View style={styles.bottomRound} ></View>
            <TouchableOpacity style={styles.bottomContainerButton}>
                <Text style={[styles.buttonText, {color:Colors.GrayDark}]}>
                    Mobile Number    
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomContainerButton}>
                <Text style={[styles.buttonText, {color:'blue'}]}>
                    Facebook    
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomContainerButton}>
                <Text style={[styles.buttonText, {color:'red'}]}>
                    Google    
                </Text>
            </TouchableOpacity>
            <Text style={styles.bottomContainerText}>
                By continuing you agree to Terms & Conditions
            </Text>
        </View>
    </View>
}

export default SignUp