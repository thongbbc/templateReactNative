/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

declare const global: { HermesInternal: null | {} };
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const authScreens = {
  SignIn: SignInScreen,
};

const userScreens = {
  Home: HomeScreen,
};


const App = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  useEffect(() => {

  }, []);
  const Home = () => {
    return <Stack.Navigator>
      {Object.entries(userScreens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  }

  const renderNavigation = () => {
    if (isLogin) {
      return <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Home} />
      </Drawer.Navigator>
    } else {
      return <Stack.Navigator>
        {Object.entries(authScreens).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    }
  }
  return (
    <NavigationContainer>
      {renderNavigation()}
    </NavigationContainer>
  );
};
export default App;
