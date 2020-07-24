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
  crossIcon: {
    height: 20,
    width: 20,
    tintColor: Colors.White,
  },
  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
  },
  mediciensText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.White,
  },
  cartIcon: {
    height: 30,
    width: 30,
    tintColor: Colors.White,
  },
  cartContainer: {
    flexDirection: 'row',
  },
  cartItemsCountContainer: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: Colors.Blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartTotalItemText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.White,
  },
  searchBarContainer: {
    height: 45,
    width: '90%',
    backgroundColor: Colors.White,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    height: 30,
    width: 30,
    tintColor: Colors.GrayMedium,
    marginLeft: 5,
  },
  searchBar: {
    // backgroundColor: 'red',
    width: '80%',
    marginLeft: 10,
    fontFamily: Fonts.Regular,
    fontSize: 16,
    color: Colors.GrayDark,
  },
  medicineContainer: {
    backgroundColor: Colors.White,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },
  medicineImage: {
    height: 100,
    width: 100,
    margin: 10,
  },
  medicineDetailsContainer: {
    justifyContent: 'space-between',
    marginVertical: 10,
    flex: 1,
  },
  medicineName: {
    fontFamily: Fonts.SemiBold,
    marginLeft: 20,
  },
  detailsChildContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  powerHeading: {
    fontFamily: Fonts.SemiBold,
    color: Colors.GrayDark,
    fontSize: 12,
  },
  PowerText: {
    fontFamily: Fonts.Regular,
    color: Colors.GrayDark,
    fontSize: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  price: {
    fontFamily: Fonts.SemiBold,
    color: Colors.GrayDark,
  },
  plusButton: {
    height: 25,
    width: 25,
    backgroundColor: Colors.GrayDark,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  plusText: {
    fontSize: 18,
    color: Colors.White,
  },
  plusMinusContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 10,
  },
  qtyText: {
    fontSize: 18,
    marginLeft: 5,
  },
  addToCartButton: {
    backgroundColor: Colors.Blue,
    padding: 5,
    borderRadius: 5,
  },
  addToCartText: {
    color: Colors.White,
    fontFamily: Fonts.SemiBold,
    fontSize: 12,
  },
});
