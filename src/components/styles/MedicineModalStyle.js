import {StyleSheet} from 'react-native';
import * as Fonts from '../../res/values/fonts';
import * as Colors from '../../res/values/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    width: '80%',
    height: '50%',
    backgroundColor: Colors.White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  medicine1: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  closeButton: {
    backgroundColor: 'rgba(255,0,0,0.5)',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    right: 0,
    margin: 10,
  },
  closeText: {
    color: Colors.White,
  },
  nameText: {
    alignSelf: 'center',
    fontFamily: Fonts.SemiBold,
  },
});
