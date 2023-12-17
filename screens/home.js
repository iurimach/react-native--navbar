import React from 'react';
import { View, Text, Button,StyleSheet, } from 'react-native';
// გლობალს შემოაიმპორტებ ყველგან სადც გინდა გლობალურდ სტილბი გქონდეს,
// თუ არ გინდა ადგნილობრიდ გასტილე-- თუ გლობალს სტილავ ადგილობრივ წაუშალე
import { globalStyles } from '../styles/global';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
      <Text style={globalStyles.titleText}>Home Screen- გასტილულია გლობალლიდან</Text>
      <View style={globalStyles.container2}>
        <Button style={globalStyles.button} title="Go to About" onPress={() => navigation.navigate('About')} />
        <Button style={globalStyles.button} title="Go to Review Details" onPress={() => navigation.navigate('ReviewDetails')} />
      </View>
    </View>
  );
};


export default HomeScreen;