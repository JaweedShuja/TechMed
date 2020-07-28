import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './style';
import * as Colors from '../../res/values/colors';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import CrossIcon from '../../res/images/crossIcon.png';
import CampasIcon from '../../res/images/campasIcon.png';
import FlagIcon from '../../res/images/flagIcon.png';
import SearchIcon from '../../res/images/searchIcon.png';

function SelectCity() {
  const [cities, setCities] = useState([
    {id: '1', name: 'Karachi'},
    {id: '2', name: 'Hyderabad'},
    {id: '3', name: 'Lahore'},
    {id: '4', name: 'Faisalābād'},
    {id: '5', name: 'Hyderābād'},
    {id: '6', name: 'Quetta'},
    {id: '7', name: 'Bannu'},
    {id: '8', name: 'Sargodha'},
    {id: '9', name: 'Sukkur'},
    {id: '10', name: 'Sheikhupura'},
    {id: '11', name: 'Gujrāt'},
    {id: '12', name: 'Gilgit'},
    {id: '13', name: 'Chiniot'},
    {id: '14', name: 'Turbat'},
  ]);
  const [cities2, setCities2] = useState([
    {id: '1', name: 'Karachi'},
    {id: '2', name: 'Hyderabad'},
    {id: '3', name: 'Lahore'},
    {id: '4', name: 'Faisalābād'},
    {id: '5', name: 'Hyderābād'},
    {id: '6', name: 'Quetta'},
    {id: '7', name: 'Bannu'},
    {id: '8', name: 'Sargodha'},
    {id: '9', name: 'Sukkur'},
    {id: '10', name: 'Sheikhupura'},
    {id: '11', name: 'Gujrāt'},
    {id: '12', name: 'Gilgit'},
    {id: '13', name: 'Chiniot'},
    {id: '14', name: 'Turbat'},
  ]);
  const [searchCity, setSearchCity] = useState('');
  function handleChange(value) {
    setSearchCity(value);
    let newArr = [];
    let count = 0;
    for (let i = 0; i < cities.length; i++) {
      var city = cities[i].name;
      if (city.slice(0, value.length).toUpperCase() == value.toUpperCase()) {
        newArr.push({
          id: `${count}`,
          name: city,
        });
        count++;
      }
    }
    setCities(newArr);
    if (value == '') {
      setCities(cities2);
    }
  }
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor
        backgroundColor={Colors.Green}
        barStyle="light-content"
      />
      <View style={styles.searchContainer}>
        <View style={styles.searchTextContainer}>
          <TouchableOpacity
            onPress={() => console.log('clicked')}
            style={styles.searchTextContainerChild}>
            <Image style={styles.crossIcon} source={CrossIcon} />
          </TouchableOpacity>
          <Text style={styles.searchContainerText}>Select your city</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <Image style={styles.searchIcon} source={SearchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search here"
            onChangeText={handleChange}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => console.log('clicked')}>
        <View style={styles.currentLocationContainer}>
          <View style={styles.campasIconContainer}>
            <Image source={CampasIcon} style={styles.campasIcon} />
          </View>
          <Text style={styles.currentLocationText}>Use current location</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.citiesContainer}>
        <View style={styles.countryContainer}>
          <Image style={styles.flagIcon} source={FlagIcon} />
          <Text style={styles.countryText}>Pakistan</Text>
        </View>
        <FlatList
          keyExtractor={cities => cities.id}
          data={cities}
          renderItem={({item}) => {
            return (
              <View style={styles.cityContainer}>
                <Text style={styles.cityText}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

export default SelectCity;

SelectCity.navigationOptions = {
  headerShown: false,
};
