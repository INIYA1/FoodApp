// import { View, Text ,ScrollView,StyleSheet} from 'react-native';
// import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons'

// export default function Payment() {
//   return (
// {/* <View style={styles.containerTable}>
//                 <View style={styles.row}>
//                     <View style={styles.cell}>
//                         <Text style={styles.textLeft}>Consultation fee</Text>
//                     </View>
//                     <View style={styles.cell}>
//                         <Text style={styles.textRight}>$50.00</Text>
//                     </View>
//                 </View>
//                 <View style={styles.row}>
//                     <View style={styles.cell}>
//                         <Text style={styles.textLeft}>Platform fee</Text>
//                     </View>
//                     <View style={styles.cell}>
//                         <Text style={styles.textRight}>$3.50</Text>
//                     </View>
//                 </View>
//                 <View style={styles.row}>
//                     <View style={styles.cell}>
//                         <Text style={styles.textLeft}>Transaction fee</Text>
//                     </View>
//                     <View style={styles.cell}>
//                         <Text style={styles.textRight}>$1.13</Text>
//                     </View>
//                 </View>
//                 <View style={styles.row1}>
//                     <View style={styles.cell}>
//                         <Text style={styles.textLeft}>Voucher fee</Text>
//                     </View>
//                     <View style={styles.cell}>
//                         <Text style={styles.textRight}>$0.00</Text>
//                     </View>
//                 </View>
//                 <View style={styles.row1}>
//                     <View style={styles.cell}>
//                         <Text style={styles.textLeft1}>Subtotal</Text>
//                     </View>
//                     <View style={styles.cell}>
//                         <Text style={styles.textRight1}>$54.63</Text>
//                     </View>
//                 </View>
//                 <View style={styles.row1}>
//                     <View style={styles.cell}>
//                         <Text style={styles.textLeft1}>Total VAT on Platform fee</Text>
//                     </View>
//                     <View style={styles.cell}>
//                         <Text style={styles.textRight1}>$0.36</Text>
//                     </View>
//                 </View>
//                 <View style={styles.row}>
//                     <View style={styles.cell}>
//                         <Text style={styles.textLeft2}>Total</Text>
//                     </View>
//                     <View style={styles.cell}>
//                         <Text style={styles.textRight2}>$54.99</Text>
//                     </View>
//                 </View>
//             </View>
//   )
// }
// const styles=StyleSheet.create({
//     containerTable: {
//         borderBottomWidth: 3,
//         borderColor: "#ccc",
//         borderRadius: 5,
//         // overflow: "hidden",
//         marginTop : 10
//     },

//     row: {
//         flexDirection: "row",
//         // justifyContent: 'flex-start',
//         // alignItems: 'flex-start',

//     },

//     row1: {
//         flexDirection: "row",
//         justifyContent: 'flex-start',
//         alignItems: 'flex-start',
//         borderBottomWidth: 1,
//         borderColor: "#ccc",
//     },

//     cell: {
//         flex: 1,
//         padding: 10,
//         // alignItems: 'flex-start',
//         // justifyContent: 'flex-start',
//         borderRightWidth:1,
//         borderRightColor: "#ccc",
//         left: 30
//         // width : 500,
//     },

//     header: {
//         // backgroundColor: "#f0f0f0",
//         // fontWeight: "bold"
//     },

//     textLeft: {
//         // justifyContent: 'flex-start',
//         // alignItems: "flex-start",
//         color: 'black',
//         fontWeight: 400,
//     },

//     textLeft1: {
//         // justifyContent: 'flex-start',
//         alignItems: "flex-start",
//         color: '#999999',
//         // fontWeight: 400,
//     },

//     textLeft2: {
//         justifyContent: 'flex-start',
//         alignItems: "flex-start",
//         color: 'black',
//         fontWeight: 700,
//     },
// }) */}
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CartItem = ({ item, onRemoveItem }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
      <Text>{item.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="-" onPress={() => onRemoveItem(item)} />
        <Text style={{ marginHorizontal: 10 }}>{item.quantity}</Text>
        <Button title="+" onPress={() => onAddItem(item)} />
        <Text style={{ marginLeft: 10 }}>${item.price}</Text>
      </View>
    </View>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 20, quantity: 2 },
  ]);
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(cartItems));

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const handleAddItem = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
    setTotalPrice(calculateTotalPrice(updatedCartItems));
  };

  const handleRemoveItem = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    }).filter((cartItem) => cartItem.quantity > 0);
    setCartItems(updatedCartItems);
    setTotalPrice(calculateTotalPrice(updatedCartItems));
  };

  return (
    <View>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
      ))}
      <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Total price: ${totalPrice}</Text>
    </View>
  );
};

export default Cart;
