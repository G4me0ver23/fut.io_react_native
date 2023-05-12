import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStorageData = async () => {
      const storageUser = JSON.parse(await AsyncStorage.getItem('@Auth:user'));
      const storageToken = await AsyncStorage.getItem('@Auth:token');

      if (storageUser && storageToken) {
        const attUser = await api.get(`/usersbyemail/${storageUser.email}`);
        if (JSON.stringify(storageUser) === JSON.stringify(attUser.data)) {
          setUser(storageUser);
        } else {
          setUser(attUser.data);
        }
      }
    };
    loadingStorageData();
  }, []);

  const signIn = async ({ email, senha }) => {
    const request = await api.post('/login', { email, senha })
    console.log(request)
    if (request.data.message) {
      console.log(request.data.message)
    } else {
      const userObj = await api.get(`/usersbyemail/${email}`)
      api.defaults.headers.common['Authorization'] = `Bearer ${request.data.JWT}`
      await AsyncStorage.setItem('@Auth:token', request.data.JWT)
      await AsyncStorage.setItem('@Auth:user', JSON.stringify(userObj.data))
      setUser(userObj.data);
    }
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setUser(null);
    console.log('saiu')
  };


  return (
    <AuthContext.Provider value={{ user, signed: !!user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};