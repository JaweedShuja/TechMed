import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import styles from './style';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';
import CrossIcon from '../../res/images/crossIcon.png';
import CartIcon from '../../res/images/cartIcon.png';
import SearchIcon from '../../res/images/searchIcon.png';
import medicines from '../../res/data/medicines.json';
import Medicine1 from '../../res/images/medicine1.png';
import MedicineModal from '../../components/MedicineModal';

const AllMedicines = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [_id, setID] = useState('');
  const [cartItemCount, setCartItemCount] = useState(0);
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={Colors.Green}
        barStyle="light-content"
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed');
        }}>
        <MedicineModal
          close={setModalVisible}
          id={_id}
          add={setCartItemCount}
          count={cartItemCount}
        />
      </Modal>
      <View style={styles.topContainer}>
        <View style={styles.childContainer}>
          <Image style={styles.crossIcon} source={CrossIcon} />
          <Text style={styles.mediciensText}>Medicines</Text>
          <View style={styles.cartContainer}>
            <Image source={CartIcon} style={styles.cartIcon} />
            <View style={styles.cartItemsCountContainer}>
              <Text style={styles.cartTotalItemText}>{cartItemCount}</Text>
            </View>
          </View>
        </View>
        <View style={styles.searchBarContainer}>
          <Image source={SearchIcon} style={styles.searchIcon} />
          <TextInput
            placeholder={'Search medicines here'}
            style={styles.searchBar}
          />
        </View>
      </View>
      <View style={{height: 30}}></View>
      <FlatList
        data={medicines}
        keyExtractor={item => item.id}
        rende
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setID(item.id);
                setModalVisible(true);
              }}
              style={styles.medicineContainer}>
              <Image source={Medicine1} style={styles.medicineImage} />
              <View style={styles.medicineDetailsContainer}>
                <Text style={styles.medicineName}>{item.ProductName}</Text>
                <View style={styles.detailsChildContainer}>
                  <View>
                    <Text style={styles.powerHeading}>Power</Text>
                    <Text style={styles.PowerText}>{item.Power}</Text>
                  </View>
                  <View>
                    <Text style={styles.powerHeading}>Price</Text>
                    <Text style={styles.PowerText}>Rs {item.Price}</Text>
                  </View>
                </View>
                <View style={styles.priceContainer}>
                  {/* <Text style={styles.price}>Rs: {item.Price}</Text> */}
                  <View style={styles.plusMinusContianer}>
                    <TouchableOpacity style={styles.plusButton}>
                      <Text style={styles.plusText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>0</Text>
                    <TouchableOpacity style={styles.plusButton}>
                      <Text style={styles.plusText}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => setCartItemCount(cartItemCount + 1)}
                    style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default AllMedicines;
