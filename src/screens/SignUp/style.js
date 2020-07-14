import {
    StyleSheet
} from 'react-native'
import * as Colors 
    from '../../res/values/colors'
import * as Fonts 
    from '../../res/values/fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.White
    },
    topContainer:{
        flex:1,
        backgroundColor:Colors.Green,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    bottomContainer:{
        flex:1,
        backgroundColor:Colors.White,
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:30,
    },
    topContainerText:{
        color:Colors.White,
        fontFamily:Fonts.Bold,
        fontSize:40,
    },
    bottomContainerButton:{
        height:45,
        width:'80%',
        backgroundColor:Colors.White,
        borderRadius:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    bottomContainerText:{
        color:Colors.GrayLight,
        fontSize:12,
    },
    buttonText:{
        fontFamily:Fonts.SemiBold
    },
    bottomRound:{
        height:50,
        width:100,
        backgroundColor:Colors.Green,
        position:'absolute',
        bottom:-40,
        right:-40,
        borderTopLeftRadius:100
    }
})