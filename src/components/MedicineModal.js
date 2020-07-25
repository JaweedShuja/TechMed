import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles/MedicineModalStyle';
import medicines from '../res/data/medicines.json';
import Medicine1 from '../res/images/medicine1.png';
import * as Colors from '../res/values/colors';
import * as Fonts from '../res/values/fonts';

const MedicineModal = ({close, id, setCartItems, cartItems}) => {
  var result = medicines.filter(obj => {
    return obj.id === id;
  });
  console.log(result[0].ProductName);
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => close(false)}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
        <Image source={Medicine1} style={styles.medicine1} />
        <Text style={styles.nameText}>{result[0].ProductName} </Text>
        <View
          style={{
            alignSelf: 'center',
            width: '80%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontFamily: Fonts.SemiBold, color: Colors.GrayDark}}>
            Power
          </Text>
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              color: Colors.GrayMedium,
            }}>
            {result[0].Power}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '80%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontFamily: Fonts.SemiBold, color: Colors.GrayDark}}>
            Formula
          </Text>
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              color: Colors.GrayMedium,
              fontSize: 12,
            }}>
            {result[0].Formula}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '80%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontFamily: Fonts.SemiBold, color: Colors.GrayDark}}>
            Price
          </Text>
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              color: Colors.GrayMedium,
            }}>
            Rs: {result[0].Price}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '80%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontFamily: Fonts.SemiBold, color: Colors.GrayDark}}>
            Company
          </Text>
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              color: Colors.GrayMedium,
            }}>
            Uniliver
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '80%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontFamily: Fonts.SemiBold, color: Colors.GrayDark}}>
            QTY
          </Text>
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              color: Colors.GrayMedium,
            }}>
            12
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            width: '60%',
            backgroundColor: Colors.Green,
            alignSelf: 'center',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={async () => {
            await setCartItems([...cartItems, {id: id, qty: 1}]);
            close(false);
          }}>
          <Text style={{fontFamily: Fonts.SemiBold, color: Colors.White}}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MedicineModal;
