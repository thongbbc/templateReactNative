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
import SignInScreen from './screen/SignInScreen';
import HomeScreen from './screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getDataByKey } from './utilities/storage';
import { kToken, kAuthState } from './constant/keyAlias';
import {
  RecoilRoot, useRecoilValue, useRecoilState,
} from 'recoil';
import { authState } from './atoms/auth';
import { useWindowDimensions } from 'react-native';
import DrawerScreen from './screen/Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const authScreens = {
  SignIn: SignInScreen,
};

const userScreens = {
  Home: HomeScreen,
  Home2: HomeScreen,
};


const MainApp = () => {
  const dimensions = useWindowDimensions();

  const [auth, setAuth] = useRecoilState<{ token?: string }>(authState);
  const checkLogin = async () => {
    const token = await getDataByKey(kToken) || undefined;
    setAuth({ token: token });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  const Home = () => {
    return <Stack.Navigator headerMode={'none'}>
      {Object.entries(userScreens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  }

  const renderNavigation = () => {

    if (auth && auth.token) {
      return <Drawer.Navigator
        drawerType={'slide'}
        drawerContent={DrawerScreen}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    } else {
      return <Stack.Navigator headerMode={'none'}>
        {Object.entries(authScreens).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    }
  }
  return renderNavigation();
};

const App = () => {
  return <RecoilRoot>
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  </RecoilRoot>
}
export default App;
