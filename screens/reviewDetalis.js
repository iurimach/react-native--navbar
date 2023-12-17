import React from 'react';
import { View, Text, Button,StyleSheet, } from 'react-native';
// გლობალს შემოაიმპორტებ ყველგან სადც გინდა გლობალურდ სტილბი გქონდეს,
// თუ არ გინდა ადგნილობრიდ გასტილე-- თუ გლობალს სტილავ ადგილობრივ წაუშალე
import { globalStyles } from '../styles/global';

const ReviewDetailsScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <View style={globalStyles.container2}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
   
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
   
      </View>
    </View>
  );
};



export default ReviewDetailsScreen;