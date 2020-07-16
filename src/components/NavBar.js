import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles/NavBarStyle';
import * as Colors from '../res/values/colors';
import HomeIcon from '../res/images/homeIcon.png';
import ChatIcon from '../res/images/chatIcon.png';
import UserIcon from '../res/images/userIcon.png';

export default function NavBar({nav}) {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.navTap}>
        <Image
          source={HomeIcon}
          style={[styles.navImage, {tintColor: nav.nav1}]}
        />
        <Text style={[styles.navText, {color: nav.nav1}]}>Home</Text>
      </View>
      <View style={styles.navTap}>
        <Image
          source={ChatIcon}
          style={[styles.navImage, {tintColor: nav.nav2}]}
        />
        <Text style={[styles.navText, {color: nav.nav2}]}>Chat</Text>
      </View>
      <View style={styles.navTap}>
        <Image
          source={UserIcon}
          style={[styles.navImage, {tintColor: nav.nav3}]}
        />
        <Text style={[styles.navText, {color: nav.nav3}]}>Account</Text>
      </View>
    </View>
  );
}
