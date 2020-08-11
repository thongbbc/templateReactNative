import AsyncStorage from '@react-native-community/async-storage';

const getDataByKey = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value;
  } catch (e) {
    return null;
  }
}

const setDataByKey = async (key: string, input: string) => {
  try {
    const value = await AsyncStorage.setItem(key, input)
    return value;
  } catch (e) {
    return null;
  }
}

export {
  getDataByKey,
  setDataByKey
}