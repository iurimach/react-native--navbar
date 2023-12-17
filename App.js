import React from 'react';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetalis';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    //ესაა ნავიგცია თუმმცა ეს არ ცანს ეკრნზე, ბექია, ეკნრზე ვაჩენ ბუთთონებით, მაგლითად 
    //home page ში ბუთნებია რომლიც უკავშირდება ამა ნავიგციას 
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  </NavigationContainer>
   
  );
}


