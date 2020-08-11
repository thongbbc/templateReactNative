import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSetRecoilState } from 'recoil';
import { authState } from '../atoms/auth';

const SignInScreen = ({ navigation }: any) => {
  const setAuth = useSetRecoilState<{ token?: string }>(authState);
  const login = () => {
    //setToken here
    setAuth({ token: 'dasdasda' })
  }
  return <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
    <TouchableOpacity onPress={login}>
      <Text>Test</Text>
    </TouchableOpacity>
  </View>
}

export default SignInScreen;