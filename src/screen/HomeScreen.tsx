import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
    <TouchableOpacity onPress={() => navigation.push('Home2')}>
      <Text>Test</Text>
    </TouchableOpacity>
  </View>
}

export default HomeScreen;