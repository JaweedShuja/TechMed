import {StyleSheet} from 'react-native';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteSmoke,
  },
  topContainer: {
    height: 100,
    backgroundColor: Colors.Green,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  mainContainer: {
    width: '90%',
    height: 350,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: -30,
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
  crossIcon: {
    height: 25,
    width: 25,
    margin: 20,
    tintColor: Colors.White,
  },
  bookText: {
    position: 'absolute',
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.White,
    alignSelf: 'center',
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
  },
});
