import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/EvilIcons';
import Food from 'react-native-vector-icons/Ionicons';
import Lock from 'react-native-vector-icons/Octicons';
import IconF from 'react-native-vector-icons/FontAwesome5';


import order from '../consts/order';

export default function OrderPage({ navigation }) {


    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);


    const CartCard = ({ order }) => {
        return (
            <View style={styles.cartscreen}>
                <View>
                    <Image style={{ marginTop: 10, height: 40, width: 40, justifyContent: 'center', alignSelf: 'center', margin: 5 }} source={order.img} />
                </View>
                <Text style={{ textAlign: 'center', color: "#433489", marginBottom: 5, justifyContent: 'center', alignSelf: 'center' }}>{order.about}</Text>
            </View>

        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <Modal animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modal}>
                        <View style={styles.card}>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <Icons name="user" size={28} marginLeft={10} color="black" />
                                <Text style={{ color: 'black', fontSize: 16 }}>  Profile</Text>
                                <Text style={{ color: 'black', fontSize: 18, marginLeft: 250 }}> {">"}</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Food name="fast-food-outline" size={28} marginLeft={10} color="black" />
                                    <Text style={{ color: 'black', fontSize: 16, marginTop: 5 }}>  Restaurant</Text>
                                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 215, marginTop: 5 }}> {">"}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Lock name="shield-lock" size={26} marginLeft={10} marginTop={5} color="black" />
                                    <Text style={{ color: 'black', fontSize: 16, marginTop: 5 }}>    Insurance</Text>
                                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 220, marginTop: 5 }}> {">"}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Food name="wallet-outline" size={26} marginLeft={10} marginTop={5} color="black" />
                                    <Text style={{ color: 'black', fontSize: 16, marginTop: 5 }}>    Billing</Text>
                                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 245, marginTop: 5 }}> {">"}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <IconF name="user-friends" size={22} marginLeft={10} marginTop={5} color="black" />
                                    <Text style={{ color: 'black', fontSize: 16, marginTop: 5 }}>    Dependents</Text>
                                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 204, marginTop: 5 }}> {">"}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Food name="book-outline" size={22} marginLeft={10} marginTop={5} color="black" />
                                    <Text style={{ color: 'black', fontSize: 16, marginTop: 5 }}>    Preparation</Text>
                                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 212, marginTop: 5 }}> {">"}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Food name="settings-outline" size={22} marginLeft={10} marginTop={5} color="black" />
                                    <Text style={{ color: 'black', fontSize: 16, marginTop: 5 }}>    Settings</Text>
                                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 235, marginTop: 5 }}> {">"}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <Food name="help-circle-outline" size={25} marginLeft={10} marginTop={5} color="black" />
                                    <Text style={{ color: 'black', fontSize: 16, marginTop: 5 }}>    Help</Text>
                                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 255, marginTop: 5 }}> {">"}</Text>
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Products')}
                                style={{ marginTop:20,backgroundColor: '#433489', height: 40, width: "90%", borderRadius: 5, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold',fontSize:20 }} >ORDER</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible1}
                    onRequestClose={() => setModalVisible1(false)}>
                
                <View style={styles.modal}>
                <View style={styles.card1}>
                <Image style={{height:100,width:130}} source={{uri:'https://previews.123rf.com/images/cvetinaivanova/cvetinaivanova1911/cvetinaivanova191100054/143171236-tick-symbol-in-green-circle-checkmark-in-checkbox-vector-icon-yes-right-or-ok-tick-check-mark-with-r.jpg'}}/>
                <Text style={{fontSize:25,color:'black'}}>Cancellation Conformation</Text>
                <Text style={{top:15,textAlign:'center',fontSize:15,color:'#696969'}}>This is to confirm that your order on{"\n"} 5 April 2022 at 16:00 has been cancelled
                . A {"\n"} refund will be processed shortly. Kindly allow {"\n"} 3-5 working days to receive the payment</Text>
                <View style={{marginTop:50,backgroundColor: '#433489', height: 40, width: "80%", borderRadius: 5, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                    <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}> RETURN TO ORDER</Text>
                </TouchableOpacity>
              </View>
              </View>
              
              </View>
                </Modal>
            </View>





            <View >
                <View style={{ backgroundColor: '#FBFBFB' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 50, width: 50, borderRadius: 5, marginTop: 25, margin: 10 }} source={{ uri: 'https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-images.jpg' }} />
                        <View>
                            <Text style={{ marginTop: 20, fontSize: 20, color: 'black' }}>Customer Name</Text>
                            <Text > Address / Mobile Number</Text>
                        </View>
                        <View>
                            <View style={styles.unreadBadge}></View>
                            <Icon name="bell-o" size={28} color='grey' marginTop={22} marginLeft={120} />
                        </View>
                    </View>
                    <View style={styles.textA}>
                        <Text style={{ color: 'black', fontSize: 16, left: 10 }}>Free account</Text>
                        <Text style={{ color: '#433489', fontSize: 15, right: 10 }}> UPGRADE</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#E6E9F4', margin: 20, borderRadius: 5 }}>
                    <View style={{ margin: 20, flexDirection: 'row' }}>
                        <Icon name="bell-o" size={40} color='#433489'></Icon>
                        <Text style={{ marginLeft: 20, marginRight: 50, fontSize: 15 }}>Your Order has been rescheduled to 16.05.
                            <Text style={{ fontWeight: 'bold' }}> Kindly apporve or decline the change.
                            </Text></Text>
                    </View>
                    <View style={styles.btnStyle}>
                        <TouchableOpacity style={styles.btnStyle1} onPress={() => setModalVisible1(true)}>
                            <Text style={styles.text1}> DECLINE </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnStyle2} onPress={() => setModalVisible(true)}>
                            <Text style={styles.text2}> APPROVE </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: 'black', marginLeft: 20, marginTop: 20 }}>How Can we help You?</Text>
                    <Text style={{ marginTop: 25, marginRight: 20, color: '#433489' }}> LEARN MORE </Text>
                </View>
                <FlatList
                    data={order} horizontal renderItem={({ item }) => <CartCard order={item} />}> </FlatList>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: 'black', marginLeft: 20, marginBottom: 20 }}>Are You Vaccinated ?</Text>
                </View>
                <View >
                    <View style={{ backgroundColor: '#EEF0F3', flexDirection: 'row', elevation: 6, borderRadius: 20, height: 150, width: '95%', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={{ backgroundColor: "white", margin: 10, borderRadius: 8, flexDirection: 'row', height: 100, width: "90%", justifyContent: 'center', alignSelf: 'center', elevation: 2 }}>
                            <Image style={{ height: 80, width: 80, marginBottom: 75, margin: 10, borderRadius: 10, marginLeft: 80 }} source={{ uri: 'https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2021-01/covid-19-vaccination-1500-991-2.jpg?itok=p2GRV4je' }} />
                            <Text style={{ marginTop: 20, lineHeight: 25, fontWeight: 'bold', marginRight: 80, fontSize: 18, color: 'black' }}>Are Your Symptoms seasonal Allergies or COVID-19?</Text>
                        </View>

                    </View>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textA: {
        height: 35,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#B8E7E8',
        borderRadius: 5,
        marginBottom: 30,
        marginTop: 30
    },
    btnStyle: {
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-around',

    },
    btnStyle1: {
        height: 38,
        width: "45%",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'red',
    },
    btnStyle2: {
        height: 38,
        width: "45%",
        borderRadius: 5,
        backgroundColor: '#17D053'
    },
    text1: {

        alignSelf: 'center',
        marginTop: 8,
        color: 'red',
        fontWeight: 'bold'
    },
    text2: {

        alignSelf: 'center',
        marginTop: 8,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartscreen: {
        height: 110,
        width: 100,
        margin: 20,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    card: {
        elevation: 20,
        backgroundColor: '#fff',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 16,
        paddingBottom: 24,
        width: '100%',
        alignItems: 'center',
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height:50
    },
    card1: {
        height:320,
        
        elevation: 20,
        backgroundColor: '#fff',
       borderRadius:20,
        // padding: 16,
        // paddingBottom: 24,
        width: '90%',
        alignItems: 'center',
        bottom:50
    },



})