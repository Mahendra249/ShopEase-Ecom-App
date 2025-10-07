import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import ProductDetail from './src/screens/ProductDetail';
import Cart from './src/screens/Cart';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          color: '#333',
        },
        headerStyle: {
          backgroundColor: '#f5f5f5',
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
    >
      <Stack.Screen name="ShopEase" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
