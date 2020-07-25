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

const AllMedicines = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [_id, setID] = useState('');
  const [cartItems, setCartItems] = useState([]);
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
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      </Modal>
      <View style={styles.topContainer}>
        <View style={styles.childContainer}>
          <Image style={styles.crossIcon} source={CrossIcon} />
          <Text style={styles.mediciensText}>Medicines</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Cart', {
                cartItems: cartItems,
              })
            }>
            <View style={styles.cartContainer}>
              <Image source={CartIcon} style={styles.cartIcon} />
              <View style={styles.cartItemsCountContainer}>
                <Text style={styles.cartTotalItemText}>{cartItems.length}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
                  <Text style={styles.powerHeading}>Power:</Text>
                  <Text style={styles.PowerText}>{item.Power}</Text>
                </View>
                <View style={styles.detailsChildContainer}>
                  <Text style={styles.powerHeading}>Price:</Text>
                  <Text style={styles.PowerText}>Rs {item.Price}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={async () => {
                  await setCartItems([...cartItems, {id: item.id, qty: 1}]);
                }}
                style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Add to cart</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
AllMedicines.navigationOptions = {
  headerShown: false,
};

export default AllMedicines;
