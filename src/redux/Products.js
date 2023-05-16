// // import { useNavigation } from "@react-navigation/native";
// import React from "react";
// import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, ImageBackground } from "react-native";
// // import { connect } from "react-redux";
// // import { store } from "../redux/store/index";
// // import { ActionTypes } from "./action/ActionTypes";
// import {data} from '../../src/consts/list'


// const Products = () => {

//     // const navigation = useNavigation()
//     // const cartList = props.cartList;

//     // const data = [
//     //     { id: 1, foodname: 'Curd rise', price: '₹80', image: require('../assets/foods1.png'), },
//     //     { id: 2, foodname: ' Rise', price: '₹210', image: require('../assets/foods1.png') },
//     //     { id: 3, foodname: 'Fried rise', price: '₹190', image: require('../assets/foods1.png') },
//     //     { id: 4, foodname: 'Noodles', price: '₹180', image: require('../assets/foods1.png'), },
//     //     { id: 5, foodname: 'Briyani', price: '₹150', image: require('../assets/foods1.png'), },
//     //     { id: 6, foodname: 'Lemon rise', price: '₹250', image: require('../assets/foods1.png'), },
//     //     { id: 7, foodname: 'Pizza', price: '₹200', image: require('../assets/foods1.png'), }]

//     return (
//         <View style={{ flex: 1, backgroundColor: 'white' }}>
//             <ScrollView>
// <View style={{ flex: 1 }}>
//     <Text style={{ color: 'black', fontSize: 25, margin: 10, fontWeight: 'bold' }}>Food List</Text>
//     <View>
//                         {data.map((item, index) => {
//                             const ind = cartList.findIndex(
//                                 (data) => data.id === item.id);
//                             return (
//                                 <View style={styles.container}>
//                                     <View>
//                                         <Image style={{ height: 80, width: 80, borderRadius: 15, }} source={item.image} />
//                                     </View>
// <Text style={{ fontSize: 20, color: 'black', marginLeft: 8 }}>{item.foodname}</Text>
// <Text style={{ fontSize: 15, color: 'black', marginLeft: 20 }}>{item.price}</Text>
//                                     <TouchableOpacity style={styles.btnstyle}
//                                         // onPress={() => {
//                                             // store.dispatch({
//                                             //     type: ActionTypes.myCartDetails,
//                                             //     payload: item
//                                             // })
//                                         // }}
//                                         >
//                                         <Text >{ind < 0 ? "Add to Cart" : "Remove to Cart"}</Text>
//                                     </TouchableOpacity>
//                                 </View>

//                             )
//                         })}
//                     </View>
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }
// // const mapStateToProps = (state) => ({
// //     cartList: state.mycartReducer.cartList
// // })
// export default (Products)

// const styles = StyleSheet.create({
//     container: {
// marginTop: 20,
// backgroundColor: "white",
// borderRadius: 10,
// padding: 2,
// margin: 15,
// marginRight: 20,
// marginLeft: 20,
// elevation: 6,
// flexDirection: 'row'
//     },
// btnstyle: {
//     height: 35,
//     width: 120,
//     borderRadius: 5,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 20,

//     }
// })
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react';
import data from '../consts/list';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
// import { addCartItem } from './reducer/mycartSlice';
// import { addItem } from './reducer/mycartSlice2';
import { AddtoCart } from './reducer/cartSlice';

export default function Products() {

    const navigation = useNavigation()
    const cartList = useSelector((state) => state.cart.cartList);
    const dispatch = useDispatch()
    const addedItems = useSelector(state => state);
    // console.log(addedItems)
    // const addItem =item => {
    //     dispatch(addCartItem(item))


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', margin: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                            <Icons name="chevron-back-circle" size={35} color={"#2C406E"} marginTop={12} />
                        </TouchableOpacity>

                        <Text style={{ color: 'black', fontSize: 30, margin: 10, fontWeight: 'bold', fontFamily: "cursive", }}>Food List 😍</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Mycart")}>
                            <Icons name="cart" size={35} color={"#2C406E"} marginTop={12} />
                            <Text>{addedItems.cart.length} </Text>
                        </TouchableOpacity></View>

                    <View>
                        {data.map((item, index) => {
                            const ind = cartList.findIndex(
                                (data) => data.id === item.id
                            )
                            return (
                                <View key={index}>
                                    <View style={styles.container}>
                                        <Image style={{ height: 100, width: 100, borderRadius: 15, justifyContent: 'center', alignSelf: 'center' }} source={item.image} />
                                        <View style={{ flexDirection: 'column', margin: 10, justifyContent: 'space-evenly' }}>
                                            <Text style={{ fontSize: 20, color: 'black', fontFamily: 'fantasy', fontWeight: '600' }}>{item.foodname}</Text>
                                            <Text style={{ fontSize: 15, color: 'black', fontWeight: '500', color: 'red' }}>{item.price}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'column' }}>
                                            {item.qty == 0 ? (
                                                <TouchableOpacity style={styles.btnstyle}
                                                    onPress={() => {
                                                        dispatch(AddtoCart(item))
                                                    }
                                                    }>
                                                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', }}> Add to cart</Text>
                                                </TouchableOpacity>
                                            ) : null}
                                            <TouchableOpacity style={{backgroundColor:'green',height:30,width:120,justifyContent:'center',alignSelf:'center',alignItems:'center',borderRadius:5}}
                                             onPress={()=>navigation.navigate("Order")}>
                                                <Text>
                                                    <Text style={{color:'white',fontWeight:'bold'}}>ORDER</Text>
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{backgroundColor:'red',height:30,width:120,justifyContent:'center',alignSelf:'center',alignItems:'center',borderRadius:5, marginTop:20}}
                                             onPress={()=>navigation.navigate("Order")}>
                                                <Text>
                                                    <Text style={{color:'white',fontWeight:'bold'}}>CANCEL</Text>
                                                </Text>
                                            </TouchableOpacity>
                                            <View style={{ flexDirection: 'row', marginTop: 25, marginRight: 15 }}>
                                                {item.qty == 0 ? null : (
                                                    <TouchableOpacity style={styles.btnstyle1}
                                                        onPress={() => {

                                                        }
                                                        }>
                                                        <Text style={{ color: 'white', fontSize: 25, fontWeight: '500', textAlign: 'center', justifyContent: 'center' }}> + </Text>
                                                    </TouchableOpacity>
                                                )}
                                                {item.qty == 0 ? null : (
                                                    <Text style={{ justifyContent: 'center', textAlign: 'center', alignSelf: 'center', fontSize: 25, marginLeft: 40, marginBottom: 20 }}>{'0'}</Text>
                                                )}


                                                <View style={{ marginLeft: 40 }}>
                                                    {item.qty == 0 ? null : (
                                                        <TouchableOpacity style={styles.btnstyle1}
                                                            onPress={() => {

                                                            }
                                                            }>
                                                            <Text style={{ color: 'white', fontSize: 30, fontWeight: '500', textAlign: 'center', justifyContent: 'center' }}>-</Text>
                                                        </TouchableOpacity>
                                                    )}
                                                    {/* <View style={{flexDirection:'row',marginTop:25,marginRight:25}}> */}

                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            )
                        })}
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 2,
        margin: 15,
        // marginRight: 20,
        // marginLeft: 20,
        elevation: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    btnstyle: {
        height: 35,
        width: 120,
        borderRadius: 5,
        backgroundColor: '#FFAA56',

        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    btnstyle1: {
        height: 40,
        width: 40,
        borderRadius: 5,
        backgroundColor: 'green',
        justifyContent: 'space-between',
        marginBottom: 10

    }
})