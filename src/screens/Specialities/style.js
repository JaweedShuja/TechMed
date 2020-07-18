import {StyleSheet} from 'react-native';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 100,
    width: '100%',
    backgroundColor: Colors.Green,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  childContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  crossIcon: {
    height: 30,
    width: 30,
    tintColor: Colors.White,
    margin: 10,
  },
  doctorText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.White,
    marginTop: 10,
  },
  searchBarContainer: {
    height: 45,
    width: '100%',
    backgroundColor: Colors.White,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  changeCityContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
  },
  cityText: {
    color: Colors.White,
    fontFamily: Fonts.SemiBold,
    margin: 10,
  },
  downIcon: {
    tintColor: Colors.White,
    height: 10,
    width: 10,
    marginTop: 15,
    marginRight: 10,
  },
  optionContainer: {
    padding: 10,
    borderRadius: 30,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  optionText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.GrayMedium,
    fontSize: 12,
  },
  doctorDataContainer: {
    width: '90%',
    height: 300,
    backgroundColor: Colors.White,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
    //borderWidth: 1,
    //borderColor: Colors.GrayDim,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
