// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
// import { connect } from 'react-redux';
// import { store } from 'redux';
// import { ActionTypes } from './action/ActionTypes';



// export function mycartReducer(state =initialState,action){
//     switch (action.type){
//         case ActionTypes.myCartDetails:
//             var newRec =[...state.cartList];
//             const ind=newRec.findIndex(
//                 (data)=>data.id === action.payload.id
//             )
//     }
// }
// const MyCartComponent = (props) => {

//     return (
//         <View style={{ flex: 1, backgroundColor: 'white' }}>
//             <Text style={{ color: 'black', fontSize: 25, margin: 10, fontWeight: 'bold' }} onPress={() => navigation.navigate("Products")}>Mycart</Text>
//             <View style={{ flex: 1 }}>
//                 {props.cartList.map((item, index) => {
//                     key={index}
//                     return (
//                         <View style={styles.container}>
//                             <View>
//                                 <Image style={{ height: 80, width: 80, borderRadius: 15, }} source={item.image} />
//                             </View>
//                             <Text style={{ fontSize: 20, color: 'black', marginLeft: 8 }}>{item.foodname}</Text>
//                             <Text style={{ fontSize: 15, color: 'black', marginLeft: 20 }}>{item.price}</Text>
//                         </View>
//                     );
//                 })}
//             </View>
//         </View>
//     )
// }

// const mapStateToProps = (state) => ({
//     cartList: state.mycartReducer.cartList
// });

// export default connect(mapStateToProps)(MyCartComponent);

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 20,
//         backgroundColor: "white",
//         shadowColor: "black",
//         borderRadius: 10,
//         shadowOpacity: 100,
//         padding: 2,
//         margin: 5,
//         marginRight: 20,
//         marginLeft: 20,
//         elevation: 6,
//         flexDirection: "row",
//         alignItems: "center"
//     },


// })


import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react';
// import data from '../consts/list';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
// import { removeCartItem } from './reducer/mycartSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { removeItem } from './reducer/mycartSlice2';
import { AddtoCart } from './reducer/cartSlice';


export default function MyCartPage() {

    const navigation = useNavigation();
    const cartList = useSelector((state) => state.cart.cartList);
    const dispatch = useDispatch();
    // const dispatch =useDispatch();
    // const removeCartItem=index=>{
    //     dispatch(removeItem(index))
    // }
    return (


        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ flex: 1 }}>

                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                            <Icons name="chevron-back-circle" size={35} color={"#2C406E"} marginTop={12} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 30, margin: 10, fontWeight: 'bold', fontFamily: "cursive", }}>My Cart 😍</Text>
                    </View>

                    <View>
                        {cartList.map((item, index) => {
                            return (
                                <View style={styles.container}>
                                    <Image style={{ height: 80, width: 80, borderRadius: 15, }} source={item.image} />
                                    <View style={{ flexDirection: 'column', margin: 10, justifyContent: 'space-evenly' }}>
                                        <Text style={{ fontSize: 20, color: 'black', fontFamily: 'fantasy', fontWeight: '600' }}>{item.foodname}</Text>
                                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '500', color: 'red' }}>{item.price}</Text>
                                    </View>
                                    <View style={{}}>
                                        <TouchableOpacity style={styles.btnstyle}
                                            onPress={() => {
                                                dispatch(AddtoCart(item))
                                            }
                                            }>
                                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}> Remove to Cart</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{backgroundColor:'green',height:30,width:120,justifyContent:'center',alignSelf:'center',alignItems:'center',borderRadius:5}}
                                             onPress={()=>navigation.navigate("Order")}>
                                                <Text>
                                                    <Text style={{color:'white',fontWeight:'bold',marginBottom:30}}>ORDER</Text>
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{marginTop:20, marginBottom: 30,backgroundColor:'red',height:30,width:120,justifyContent:'center',alignSelf:'center',alignItems:'center',borderRadius:5}}
                                             onPress={()=>navigation.navigate("Order")}>
                                                <Text>
                                                    <Text style={{color:'white',fontWeight:'bold',marginBottom:30}}>CANCEL</Text>
                                                </Text>
                                            </TouchableOpacity>
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
        marginRight: 20,
        marginLeft: 20,
        elevation: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    btnstyle: {
        height: 35,
        width: 120,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    }
})