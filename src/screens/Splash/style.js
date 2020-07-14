import {StyleSheet} from 'react-native'
import * as Colors from '../../res/values/colors.js'
import * as Fonts from '../../res/values/fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.Green,
    },
    textStyle:{
        color:Colors.White,
        fontFamily:Fonts.Bold,
        fontSize:40
    },
    dotContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'10%'
    },
    dot:{
        height:7,
        width:7,
        backgroundColor:Colors.White,
        borderRadius:20,
    }
})