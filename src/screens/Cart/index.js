import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './style.js';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import medicines from '../../res/data/medicines.json';
import Medicine1 from '../../res/images/medicine1.png';

const Cart = ({route, navigation}) => {
  const {params} = navigation.state;
  const cartItems = params ? params.cartItems : null;
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={Colors.Green}
        barStyle="light-content"
      />
      <View style={styles.topContainer}></View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>CHECKOUT</Text>
      </TouchableOpacity>
      <FlatList
        data={cartItems}
        keyExtractor={cartItems => cartItems.id}
        renderItem={({item}) => {
          var result = medicines.filter(obj => {
            return obj.id === item.id;
          });
          //return <Text>{result[0].ProductName}</Text>;
          return (
            <View
              style={{
                backgroundColor: 'white',
                margin: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={Medicine1}
                style={{height: 100, width: 100, margin: 10}}
              />
              <View
                style={{
                  justifyContent: 'space-around',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.SemiBold,
                  }}>
                  {result[0].ProductName}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: Fonts.SemiBold,
                      color: Colors.GrayDark,
                    }}>
                    Power
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.SemiBold,
                      color: Colors.GrayMedium,
                      marginLeft: 5,
                    }}>
                    {result[0].Power}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: Fonts.SemiBold,
                      color: Colors.GrayDark,
                    }}>
                    Price
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.SemiBold,
                      color: Colors.GrayMedium,
                      marginLeft: 5,
                    }}>
                    Rs: {result[0].Price}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Cart;

Cart.navigationOptions = {
  headerShown: false,
};
