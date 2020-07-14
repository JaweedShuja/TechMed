import {StyleSheet} from 'react-native'
import * as Colors from '../../res/values/colors'
import * as Fonts from '../../res/values/fonts'

export default StyleSheet.create({
    container:{
        flex:1,
    },
    topContainer:{
        flex:3,
        backgroundColor:'#f6f6f6'
    },
    keypadContainer:{
        flex:2,
    },
    keypadTopView:{
        height:50,
        backgroundColor:'#f6f6f6',
        flexDirection:'row',
        alignItems:'center',
        borderTopWidth:3,
        borderColor:'lightgray'
    },
    leftRightIcon:{
        height:25.75,
        width:13.275,
        margin:10,
        tintColor:Colors.GrayMedium
    },
    topViewText:{
        fontSize:18,
        fontFamily:Fonts.SemiBold,
        color:'blue',
        opacity:0.8,
    },
    textContiner:{
        position:'absolute',
        right:10,
        padding:10,
    },
    crossIcon:{
        height:20,
        width:20,
        margin:20,
        tintColor:Colors.GrayMedium
    },
    idcardIcon:{
        height:75,
        width:120,
        alignSelf:'center'
    },
    instructionText:{
        alignSelf:'center',
        fontFamily:Fonts.SemiBold,
        color:Colors.GrayLight,
    },
    enterNumberContainer:{
        flex:1,
        width:'80%',
        backgroundColor:Colors.White,
        alignSelf:'center',
        margin:20,
        borderRadius:10,   
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        justifyContent:'space-around'
    },
    numberContainer:{
        flexDirection:'row',
        height:40,
        marginHorizontal:20,
        marginTop:10
    },
    codeContainer:{
        flex:1,
        borderWidth:1,
        borderColor:Colors.GrayDim,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    textInputContainer:{
        flex:4,
        borderWidth:1,
        borderColor:Colors.GrayDim,
        borderRadius:10,
        marginLeft:10
    },
    codeText:{
        fontFamily:Fonts.SemiBold,
    },
    submitButton:{
        height:45,
        width:'90%',
        backgroundColor:Colors.Green,
        alignSelf:'center',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    submitButtonText:{
        color:Colors.White,
        fontFamily:Fonts.SemiBold,
    }
    

})