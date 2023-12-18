// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LeagueScreen from './screens/LeagueScreen';
import DriverScreen from './screens/DriverScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="League" component={LeagueScreen} />
        <Stack.Screen name="Driver" component={DriverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
