import {StyleSheet} from 'react-native';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  topContainer: {
    height: 80,
    backgroundColor: Colors.Green,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  appText: {
    color: Colors.White,
    fontSize: 18,
    fontFamily: Fonts.Bold,
    margin: 10,
  },
  changeCityContainer: {
    flexDirection: 'row',
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
  roungIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  round: {
    height: 70,
    width: 70,
    backgroundColor: Colors.White,
    borderRadius: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 45,
  },
  textContainer: {
    height: 80,
    width: 100,
    alignItems: 'center',
  },
  mainText: {
    fontFamily: Fonts.SemiBold,
    marginTop: 5,
  },
  desText: {
    fontSize: 10,
    marginHorizontal: 5,
    color: Colors.GrayMedium,
    fontFamily: Fonts.SemiBold,
  },
  imageContainer: {
    width: '90%',
    height: 180,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.GrayDim,
  },
  doctors: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  roundImage: {
    height: 45,
    width: 50,
  },
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
  nearByDoctorsContainer: {
    flex: 1,
    marginBottom: 70,
  },
  nearByTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 10,
  },
  seeAllText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.Blue,
  },
  nearByText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.GrayDark,
  },
  doctorContainer: {
    width: 150,
    backgroundColor: Colors.White,
    margin: 10,
    height: '80%',
    alignSelf: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-around',
  },
  doctorImage: {
    height: 55,
    width: 55,
    position: 'absolute',
    alignSelf: 'center',
    top: -20,
  },
  doctorName: {
    fontFamily: Fonts.SemiBold,
    marginTop: 40,
    marginLeft: 10,
    fontSize: 12,
  },
  doctorDesc: {
    fontSize: 12,
    marginHorizontal: 10,
    color: Colors.GrayLight,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    height: 15,
    width: 15,
    marginLeft: 10,
    tintColor: 'yellow',
  },
  doctorRating: {
    fontFamily: Fonts.SemiBold,
    color: Colors.GrayDark,
    marginTop: 5,
    marginLeft: 5,
  },
});
