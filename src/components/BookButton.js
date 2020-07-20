import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles/BookButtonStyle';

function BookButton() {
  return (
    <View style={styles.bottomButtonContainer}>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookText}>Book</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.feedBackConatainer}>
        <Text style={styles.feedbackText}>Give Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BookButton;
