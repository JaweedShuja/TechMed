import {StyleSheet} from 'react-native'
import * as Fonts from '../../res/values/fonts'
import * as Colors from '../../res/values/colors'

export default StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        flex:1,
        flexDirection:'row'
    },
    colomn:{
        flex:1,
        backgroundColor:'white',
        borderBottomWidth:1,
        borderRightWidth:1,
        borderColor:'lightgray',
        alignItems:'center',
        justifyContent:'center',
    },
    darkColomn:{
        flex:1,
        backgroundColor:'lightgray',
        alignItems:'center',
        justifyContent:'center',
    },

    columnText:{
        fontSize:25,
        fontFamily:Fonts.SemiBold,
    },
    backspaceIcon:{
        height:21.5,
        width:30,
    },
    alphabate:{
        position:'absolute',
        bottom:-5,
        alignSelf:'center',
        fontSize:12
    }
})