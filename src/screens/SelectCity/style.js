import {StyleSheet} from 'react-native'
import * as Colors from '../../res/values/colors'
import * as Fonts from '../../res/values/fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.WhiteSmoke
    },
    searchContainer:{
        height:'17%',
        backgroundColor:Colors.Green,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        justifyContent:'center'
    },
    searchBarContainer:{
        height:45,
        width:'80%',
        position:'absolute',
        backgroundColor:Colors.White,
        alignSelf:'center',
        borderRadius:30,
        bottom:-20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection:'row',
        alignItems:'center',
    },
    crossIcon:{
        height:15,
        width:15,
        tintColor:Colors.White,
        marginLeft:30
    },
    searchTextContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    searchContainerText:{
        color:Colors.White,
        fontSize:18,
        fontFamily:Fonts.SemiBold,
        marginLeft:10,
        marginTop:5
    },
    searchTextContainerChild:{
        padding:10,
    },
    citiesContainer:{
        height:'60%',
        width:'100%',
        backgroundColor:Colors.White,
        position:'absolute',
        bottom:0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    currentLocationContainer:{
        marginTop:50,
        flexDirection:'row',
        alignItems:'center'
    },
    campasIconContainer:{
        backgroundColor:Colors.White,
        height:30, 
        width:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginLeft:30
    },
    campasIcon:{
        height:20, 
        width:20,
        tintColor:'cyan',
        opacity:0.3
    },
    currentLocationText:{
        fontFamily:Fonts.Regular,
        color:Colors.GrayDark,
        marginLeft:10,
    },
    cityContainer:{
        borderBottomWidth:1,
        borderColor:Colors.WhiteSmoke,
        marginTop:5,
        padding:10,
        width:'80%',
        alignSelf:'center'
    },
    countryContainer:{
        borderBottomWidth:1,
        borderColor:Colors.WhiteSmoke,
        marginTop:5,
        padding:10,
        width:'80%',
        alignSelf:'center',
        flexDirection:'row',
    },
    cityText:{
        fontFamily:Fonts.Regular,
        color:Colors.GrayLight,
        marginLeft:30,
    },
    countryText:{
        fontFamily:Fonts.SemiBold,
        color:Colors.GrayDark,
        marginLeft:10,
    },
    flagIcon:{
        height:20,
        width:20,
        tintColor:Colors.Blue
    },
    searchIcon:{
        height:20,
        width:20,
        marginLeft:10,
        tintColor:Colors.GrayMedium
    },
    searchBar:{
        marginHorizontal:10,
        width:'80%',

    }
})