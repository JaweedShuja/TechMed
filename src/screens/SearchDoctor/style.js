import {StyleSheet} from 'react-native';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
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
    height: 15,
    width: 15,
    tintColor: Colors.White,
    margin: 10,
  },
  doctorText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.White,
    marginTop: 3,
  },
  searchBarContainer: {
    height: 45,
    width: '90%',
    backgroundColor: Colors.White,
    alignSelf: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
    flexDirection: 'row',
  },
  topText: {
    marginTop: 40,
    marginLeft: 20,
    fontFamily: Fonts.SemiBold,
  },
  bottomContainer: {
    backgroundColor: Colors.White,
    flex: 1,
    marginTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  dataContainer: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: Colors.WhiteSmoke,
    justifyContent: 'center',
  },
  dataText: {
    fontFamily: Fonts.SemiBold,
    marginLeft: 30,
    color: Colors.GrayLight,
  },
});
