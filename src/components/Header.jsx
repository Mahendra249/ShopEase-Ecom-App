import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Welcome to Ecommerce Store</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartIcon}>🛒</Text>    

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF',
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    padding: 5,
    fontWeight: 500,
    fontSize: 15,
    marginBottom: 5,
    color: 'gray',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
});

export default Header;
