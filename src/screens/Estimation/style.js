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
    // height: 350,
    paddingBottom: 10,
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
  totalContainer: {
    width: '90%',
    // height: 350,
    paddingBottom: 10,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 20,
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
    tintColor: Colors.White,
  },
  bookText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.White,
    marginLeft: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: 10,
    borderColor: Colors.WhiteSmoke,
  },
  crossContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  desText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
  },
  priceText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.GrayMedium,
    position: 'absolute',
    right: 70,
    alignSelf: 'center',
  },
  totalPriceText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.GrayDark,
    position: 'absolute',
    right: 70,
    alignSelf: 'center',
  },
  deleteIcon: {
    height: 20,
    width: 20,
    tintColor: Colors.GrayMedium,
  },
  addMoreButton: {
    height: 45,
    width: 250,
    borderWidth: 1,
    borderColor: Colors.GrayDim,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.GrayDark,
  },
  topLine: {
    flexDirection: 'row',
    width: '90%',
    height: 10,
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: -5,
  },
  line: {
    height: 1,
    width: 3,
    backgroundColor: Colors.GrayMedium,
    margin: 5,
  },
});
