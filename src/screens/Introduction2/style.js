import {StyleSheet} from 'react-native';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  image: {
    alignSelf: 'center',
    marginTop: '40%',
  },
  text1: {
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: Fonts.SemiBold,
    marginTop: 10,
    color: Colors.GrayDark,
  },
  text2: {
    alignSelf: 'center',
    fontFamily: Fonts.SemiBold,
    color: Colors.GrayMedium,
  },
  nextButton: {
    height: 50,
    width: 150,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.GrayMedium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.Blue,
  },
});
