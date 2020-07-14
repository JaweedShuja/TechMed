import React from 'react'
import { 
    Text,
    View,
} from 'react-native'
import styles from './style'
import * as Colors from '../../res/values/colors'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';

function Splash(){
    return <View
         style={styles.container}>
        <GeneralStatusBarColor backgroundColor={Colors.Green} barStyle="light-content"/>
        <Text
         style={styles.textStyle}>
            TechMed
        </Text>
        <View
         style={styles.dotContainer}
        >
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
        </View>
    </View>
}

export default Splash