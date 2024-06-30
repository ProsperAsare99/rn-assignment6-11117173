import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductList from '../components/ProductList';

const products = [
  { id: '1', name: 'Reversible Angora Cardigan', description: '21WN reversible angora cardigan', price: '$120', image: require('../assets/dress1.png') },
  { id: '2', name: 'Reversible Angora Cardigan', description: 'Black reversible angora cardigan', price: '$120', image: require('../assets/dress2.png') },
  { id: '3', name: 'Reversible Angora Cardigan', description: 'Lopo reversible angora cardigan', price: '$120', image: require('../assets/dress3.png') },
  { id: '4', name: 'Reversible Angora Cardigan', description: 'Reversible angora cardigan', price: '$120', image: require('../assets/dress4.png') },
  { id: '5', name: 'Reversible Angora Cardigan', description: 'Lame reversible angora cardigan', price: '$120', image: require('../assets/dress5.png') },
  { id: '6', name: 'Recycle Boucle Knit Cardigan', description: 'Recycle Boucle Knit Cardigan Pink', price: '$120', image: require('../assets/dress6.png') },
  { id: '7', name: 'Office Wear', description: 'Office wear for you office', price: '$120', image: require('../assets/dress7.png') },
];

export default function HomeScreen({ navigation }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const cartItems = await AsyncStorage.getItem('cart');
      if (cartItems) {
        setCart(JSON.parse(cartItems));
      }
    };
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <ProductList products={products} addToCart={addToCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});