import AsyncStorage from "@react-native-async-storage/async-storage";

const getStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
};

const setStorage = async (key: string, value: Array<object> | boolean) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

const clearStorage = () => async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error(e);
  }
};

export { getStorage, setStorage, clearStorage };
