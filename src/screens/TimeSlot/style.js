import {StyleSheet} from 'react-native';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteSmoke,
  },
  topContainer: {
    width: '100%',
    height: 150,
    backgroundColor: Colors.Green,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  mainContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: Colors.White,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
    borderRadius: 20,
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
  profileContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: Colors.WhiteSmoke,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  doctorImage: {
    height: 70,
    width: 70,
  },
  nameContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  name: {
    fontFamily: Fonts.SemiBold,
  },
  qualification: {
    fontFamily: Fonts.SemiBold,
    color: Colors.GrayMedium,
    fontSize: 12,
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  dayText: {
    alignSelf: 'center',
    fontFamily: Fonts.SemiBold,
    color: Colors.GrayDark,
  },
  lrIcon: {
    height: 10,
    width: 10,
  },
  lrContaienr: {
    padding: 5,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: Colors.GrayDim,
  },
  morningContainer: {
    width: '90%',
    height: 100,
    backgroundColor: Colors.WhiteSmoke,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.GrayDim,
  },
  morningLabel: {
    height: 30,
    backgroundColor: 'lightblue',
    marginLeft: 10,
    marginTop: -15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  morningText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.GrayDark,
  },
  timeContianer: {
    flexDirection: 'row',
    margin: 10,
  },
  time: {
    fontFamily: Fonts.SemiBold,
    margin: 5,
    color: Colors.GrayDark,
    opacity: 0.9,
    fontSize: 15,
  },
});
