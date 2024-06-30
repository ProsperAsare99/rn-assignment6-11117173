import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <FlatList
      data={cart}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cartItemContainer}>
          <Image source={item.image} style={styles.cartItemImage} />
          <View style={styles.cartItemDetails}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemDescription}>{item.description}</Text>
            <Text style={styles.cartItemPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity onPress={() => removeFromCart(item)}>
            <Image source={require('../assets/remove.png')} style={styles.removeButton} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemDescription: {
    fontSize: 14,
    color: 'gray',
  },
  cartItemPrice: {
    fontSize: 14,
    color: 'gray',
  },
  removeButton: {
    width: 25,
    height: 25,
  },
});

export default Cart;