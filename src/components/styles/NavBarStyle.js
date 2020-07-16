import {StyleSheet} from 'react-native';
import * as Fonts from '../../res/values/fonts';

export default StyleSheet.create({
  bottomNav: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navTap: {
    height: 50,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navImage: {
    height: 20,
    width: 20,
  },
  navText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 12,
  },
});
