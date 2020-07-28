import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import styles from './style.js';
import * as Colors from '../../res/values/colors';
import * as Fonts from '../../res/values/fonts';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import medicines from '../../res/data/medicines.json';
import Medicine1 from '../../res/images/medicine1.png';
import CrossIcon from '../../res/images/crossIcon.png';
import BackArrowIcon from '../../res/images/backArrowIcon.png';

export default class Cart extends React.Component {
  backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      //{text: 'YES', onPress: () => BackHandler.exitApp()},
      {
        text: 'YES',
        onPress: () => {
          this.props.setSelectedScreen('AllMedicines');
        },
      },
    ]);
    return true;
  };
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    //const {params} = this.props.navigation.state;
    this.state = {
      cartItems: this.props.cartItems,
      totalAmount: 0,
    };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.remove = this.remove.bind(this);
  }
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
    let total = 0;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      total += parseInt(this.state.cartItems[i].price);
      console.log(this.state.cartItems[i].price);
    }
    this.setState({
      totalAmount: total,
    });
  }
  componentWillUnmount() {
    this.backHandler.remove();
  }

  plus(id) {
    this.setState(prevState => {
      const updatedItems = prevState.cartItems.map(item => {
        if (item.id === id) {
          item.qty = parseInt(item.qty) + 1;
          this.setState({
            totalAmount: this.state.totalAmount + parseInt(item.price),
          });
        }
        return item;
      });
      return {
        cartItems: updatedItems,
      };
    });
  }
  remove(item) {
    this.props.remove(item);
    const _items = this.state.cartItems.filter(_item => _item !== item);
    this.setState({
      cartItems: _items,
    });

    this.setState({
      totalAmount:
        this.state.totalAmount - parseInt(item.price) * parseInt(item.qty),
    });
  }
  minus(id) {
    this.setState(prevState => {
      const updatedItems = prevState.cartItems.map(item => {
        if (item.id === id) {
          if (item.qty != 1) {
            item.qty = parseInt(item.qty) - 1;
            this.setState({
              totalAmount: this.state.totalAmount - parseInt(item.price),
            });
          }
        }
        return item;
      });
      return {
        cartItems: updatedItems,
      };
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <GeneralStatusBarColor
          backgroundColor={Colors.Green}
          barStyle="light-content"
        />

        <View style={styles.topContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.setSelectedScreen('AllMedicines');
            }}
            style={{
              marginLeft: 10,
            }}>
            <Image
              style={{
                tintColor: Colors.White,
                height: 30,
                width: 30,
              }}
              source={BackArrowIcon}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontFamily: Fonts.SemiBold,
              color: Colors.White,
              marginLeft: '30%',
            }}>
            Cart Items
          </Text>
        </View>

        <FlatList
          data={this.state.cartItems}
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
                  borderRadius: 10,
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
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontFamily: Fonts.SemiBold,
                        color: Colors.GrayDark,
                      }}>
                      Qty
                    </Text>
                    <Text
                      style={{
                        fontFamily: Fonts.SemiBold,
                        color: Colors.GrayMedium,
                        marginLeft: 5,
                      }}>
                      {item.qty}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontFamily: Fonts.SemiBold,
                        color: Colors.GrayDark,
                      }}>
                      Total Price
                    </Text>
                    <Text
                      style={{
                        fontFamily: Fonts.SemiBold,
                        color: Colors.GrayMedium,
                        marginLeft: 5,
                      }}>
                      {result[0].Price * item.qty}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 50,
                    width: 100,
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.plus(item.id)}
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: Colors.Blue,
                      borderRadius: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                      }}>
                      +
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.minus(item.id)}
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: Colors.Blue,
                      borderRadius: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                      }}>
                      -
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 0,
                    margin: 10,
                  }}
                  onPress={() => this.remove(item)}>
                  <Image
                    style={{
                      height: 15,
                      width: 15,

                      tintColor: Colors.GrayDim,
                    }}
                    source={CrossIcon}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              color: Colors.GrayDark,
              fontSize: 16,
            }}>
            Sub Total
          </Text>
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              color: Colors.GrayDark,
              fontSize: 16,
            }}>
            {this.state.totalAmount}
          </Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// export default Cart;

// Cart.navigationOptions = {
//   headerShown: false,
// };
