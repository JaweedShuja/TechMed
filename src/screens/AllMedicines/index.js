import React, {useState, useEffect} from 'react';
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
import Cart from '../Cart';

const AllMedicines = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [medicines_1, setMedicines_1] = useState(medicines);
  const [medicines_2, setMedicines_2] = useState(medicines);
  const [price, setPrice] = useState('');
  const [_id, setID] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [searchMedicines, setSearchMedicines] = useState('');
  const [selectedScreen, setSelectedScreen] = useState('AllMedicines');
  function handleChange(value) {
    setSearchMedicines(value);
    let newArr = [];
    let count = 0;
    for (let i = 0; i < medicines_1.length; i++) {
      var id = medicines_1[i].id;
      var midecine = medicines_1[i].ProductName;
      var power = medicines_1[i].Power;
      var price = medicines_1[i].Price;
      var formula = medicines_1[i].Formula;
      if (
        midecine.slice(0, value.length).toUpperCase() == value.toUpperCase()
      ) {
        newArr.push({
          id: id,
          ProductName: midecine,
          Power: power,
          Formula: formula,
          Price: price,
        });
        count++;
      }
    }
    setMedicines_1(newArr);
    if (value == '') {
      setMedicines_1(medicines_2);
    }
  }
  function remove(item) {
    const _items = cartItems.filter(_item => _item !== item);
    setCartItems(_items);

    // this.setState({
    //   totalAmount:
    //     this.state.totalAmount - parseInt(item.price) * parseInt(item.qty),
    // });
  }

  if (selectedScreen == 'AllMedicines') {
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
            price={price}
          />
        </Modal>
        <View style={styles.topContainer}>
          <View style={styles.childContainer}>
            <Image style={styles.crossIcon} source={CrossIcon} />
            <Text style={styles.mediciensText}>Medicines</Text>
            <TouchableOpacity
              onPress={() =>
                // navigation.navigate('Cart', {
                //   cartItems: cartItems,
                // })
                setSelectedScreen('Cart')
              }>
              <View style={styles.cartContainer}>
                <Image source={CartIcon} style={styles.cartIcon} />
                <View style={styles.cartItemsCountContainer}>
                  <Text style={styles.cartTotalItemText}>
                    {cartItems.length}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchBarContainer}>
            <Image source={SearchIcon} style={styles.searchIcon} />
            <TextInput
              placeholder={'Search medicines here'}
              style={styles.searchBar}
              onChangeText={handleChange}
            />
          </View>
        </View>
        <View style={{height: 30}}></View>
        <FlatList
          data={medicines_1}
          keyExtractor={item => item.id}
          rende
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setID(item.id);
                  setModalVisible(true);
                  setPrice(item.Price);
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
                    await setCartItems([
                      ...cartItems,
                      {id: item.id, qty: 1, price: parseInt(item.Price)},
                    ]);
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
  } else if (selectedScreen == 'Cart') {
    return (
      <Cart
        cartItems={cartItems}
        setSelectedScreen={setSelectedScreen}
        remove={remove}
      />
    );
  }
};
AllMedicines.navigationOptions = {
  headerShown: false,
};

export default AllMedicines;
