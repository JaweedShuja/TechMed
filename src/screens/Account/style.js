import {StyleSheet} from 'react-native';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  profileContainer: {
    flex: 4,
    backgroundColor: Colors.Green,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  optionsContainer: {
    flex: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: Colors.White,
  },
  topIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  topIcon: {
    height: 25,
    width: 25,
    tintColor: Colors.White,
  },
  doctorImage: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: -30,
  },
  nameContainer: {
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: Fonts.SemiBold,
    color: Colors.White,
  },
  numbere: {
    fontFamily: Fonts.Regular,
    color: Colors.White,
    alignSelf: 'center',
    marginTop: -10,
  },
  barContainer: {},
  barPer: {
    fontFamily: Fonts.Regular,
    color: Colors.White,
    fontSize: 18,
    alignSelf: 'center',
  },
  bar: {
    height: 10,
    width: '80%',
    backgroundColor: Colors.White,
    borderRadius: 70,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  barFil: {
    height: 5,
    width: '50%',
    backgroundColor: Colors.Green,
    marginHorizontal: 5,
    borderRadius: 70,
  },
  completProfileButton: {
    height: 40,
    width: '60%',
    color: Colors.Green,
    borderWidth: 2,
    borderColor: Colors.White,
    alignSelf: 'center',
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: Fonts.Regular,
    color: Colors.White,
  },
  detailsConainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  optionContainer: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: Colors.WhiteSmoke,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: Colors.GrayDark,
    fontFamily: Fonts.Regular,
    alignSelf: 'center',
    marginLeft: 40,
  },
  optionImage: {
    height: 25,
    width: 25,
    tintColor: Colors.Green,
    marginLeft: 10,
  },
  forwardIcon: {
    height: 20,
    width: 20,
    tintColor: Colors.Green,
    position: 'absolute',
    right: 0,
  },
});
