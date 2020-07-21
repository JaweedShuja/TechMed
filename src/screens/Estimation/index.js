import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import CrossIcon from '../../res/images/crossIcon.png';
import DeleteIcon from '../../res/images/deleteIcon.png';

let lines = [];
for (let i = 0; i < 50; i++) {
  lines.push(<View style={styles.line}></View>);
}

export default function Estimation() {
  const [items, setItems] = useState([
    {id: '1', desc: 'T3-T4-T5H', price: '20'},
    {id: '2', desc: 'Iron Deficiency Profile', price: '20'},
    {id: '3', desc: 'Liver Function Tests', price: '40'},
  ]);
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={Colors.Green}
        barStyle="light-content"
      />
      <View style={styles.topContainer}>
        <View style={styles.crossContainer}>
          <Image source={CrossIcon} style={styles.crossIcon} />
          <Text style={styles.bookText}>Book test & packages online...</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        {items.map(item => {
          return (
            <View style={styles.itemContainer} key={item.id}>
              <Text style={[styles.desText, {color: Colors.GrayDark}]}>
                {item.desc}
              </Text>
              <Text style={styles.priceText}>$ {item.price}</Text>
              <Image source={DeleteIcon} style={styles.deleteIcon} />
            </View>
          );
        })}
        <View style={styles.itemContainer}>
          <Text style={[styles.desText, {color: Colors.GrayMedium}]}>
            Pickup Charges
          </Text>
          <Text style={styles.priceText}>$ 0</Text>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.topLine}>{lines}</View>
        <View style={styles.itemContainer}>
          <Text style={[styles.desText, {color: Colors.GrayDark}]}>Total</Text>
          <Text style={styles.totalPriceText}>$ 88</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addMoreButton}>
        <Text style={styles.buttonText}>+ Add more tests</Text>
        {/* {HOC(<Text />)} */}
      </TouchableOpacity>
    </View>
  );
}
