import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async key => {
  try {
    if (typeof key.value === 'object') {
      const jsonValue = JSON.stringify(key.value);
      await AsyncStorage.setItem(key.name, jsonValue);
    } else {
      await AsyncStorage.setItem(key.name, key.value);
    }
  } catch (e) {
    console.log('error with set storage', e);
  }
};

const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('error with get storage', e);
  }
};

const remuveData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('error with get storage', e);
  }
};

export {storeData, getData, remuveData};
