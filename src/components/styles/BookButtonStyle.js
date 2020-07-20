import {StyleSheet} from 'react-native';
import * as Fonts from '../../res/values/fonts';
import * as Colors from '../../res/values/colors';

export default StyleSheet.create({
  bottomButtonContainer: {
    height: 50,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 10,
    backgroundColor: Colors.White,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookButton: {
    width: '50%',
    height: '100%',
    backgroundColor: Colors.Green,
    borderRadius: 30,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookText: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    color: Colors.White,
  },
  feedBackConatainer: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderRadius: 30,
  },
  feedbackText: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
  },
});
