import {StyleSheet} from 'react-native';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 70,
    backgroundColor: Colors.Green,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  checkoutButton: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.Blue,
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutText: {
    fontSize: 16,
    color: Colors.White,
    fontFamily: Fonts.Regular,
  },
});
