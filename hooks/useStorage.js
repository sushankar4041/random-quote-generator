import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = (key, initialValue) => {
  const [stored, setStored] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setStored(JSON.parse(value));
        }
      } catch (error) {
        console.warn(`Error loading ${key}:`, error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [key]);

  const setValue = async (newValue) => {
    try {
      const toStore = typeof newValue === 'function' ? newValue(stored) : newValue;
      setStored(toStore);
      await AsyncStorage.setItem(key, JSON.stringify(toStore));
    } catch (error) {
      console.warn(`Error saving ${key}:`, error);
    }
  };

  return [stored, setValue, loading];
};