import React, { useEffect, useState } from "react";
import { Animated, View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Color from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import Hand from 'react-native-vector-icons/MaterialCommunityIcons';
import Drink from 'react-native-vector-icons/Feather';
import Food from 'react-native-vector-icons/FontAwesome5';
import food from '../consts/food'
import cards from "../../components/cards"
import { SafeAreaView } from "react-native-safe-area-context";
import cartcard from "./cartcard";
import AsyncStorage from "@react-native-async-storage/async-storage";


const width = Dimensions.get('screen').width / 1 - 30
const SigninScreen = ({ navigation }) => {

    const [name,setName]=useState('')
     
    useEffect(()=>{
        getData();
        
    },[]);


    const getData = () =>{
        try{
            AsyncStorage.getItem('User Name')
            .then(name=>{
                if(name != null){
                    setName(name)
                }
            })
        }catch(error){
            console.log(error)
            
        }
    }


    const List = ({ cards }) => {
        return (
            <View style={[Styles.card, { backgroundColor: cards.color }]}>
                <View style={{ alignItems: "center", }}>
                    <Text style={{ fontSize: 19, color: "white", fontWeight: "bold" }}>{cards.end}</Text>
                    <Text style={{ fontFamily: "cursive", fontSize: 25, fontWeight: "bold", color: "black" }}>{cards.offer}</Text>
                    <Text>{cards.menu}</Text>
                </View>
            </View>
        );
    };

    const Dish = ({ food }) => {
        return (
            <View style={Styles.card1}>

                <Image style={{ height: 80, width: 120, alignSelf: 'center', borderRadius: 5}} source={food.img} />
                <View>
                    <Text style={{ fontWeight: "bold", color: "white", fontSize: 12, textAlign: "center" }}>{food.about}</Text>
                    <Text style={{ fontWeight: "bold", color: "white", fontSize: 12, textAlign: "center" }}>{food.name}</Text>
                    <Text style={{ fontWeight: "bold", color: "white", fontSize: 12, textAlign: "center" }}>{food.price}</Text>
                </View>
            </View>
        )
    };


    const CartCard = ({ cartcard }) => {
        return (
            <View style={Styles.cartscreen}>

                <View style={{ flexDirection: "row" }}>
                    <ImageBackground style={{ height: 40, width: 40, justifyContent: "flex-start", borderRadius: 10, flexDirection: "row" }} source={cartcard.img}></ImageBackground>
                </View>
                <Text style={{ color: "black", marginLeft: 10 }}>{cartcard.name}</Text>
                <View>
                    <Text style={{ color: "red", fontWeight: "bold", marginHorizontal: 20 }}>{"$"}{cartcard.price}</Text>
                </View>
                <View >
                    <Icon name="heart-fill" size={15} color={cartcard.like ? "#ff586e" : "black"} />
                </View>
            </View>

        )
    }


    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
                <View style={{ marginLeft: 10, marginTop: 20, justifyContent: "space-between", flexDirection: "row" }}>
                <TouchableOpacity onPress={()=>navigation.navigate("API")}>
                    <Icon name="apps" size={30} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 270, }}>
                        <Color name="color-lens" size={30} />
                    </View>

                    <Icons name="md-moon" size={28} style={{ marginRight: 20 }} />
                </View>
                <Text style={{ fontSize: 15, color: "black", marginLeft: 10 }}>Good Morning</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", justifyContent: "center", color: "black", marginLeft: 10 }}>{name} 👋</Text>



                <View style={Styles.searchcontainer}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                        <Icon name="search" size={20} />
                    </View>
                    <TextInput
                        placeholder="Search beverges or foods" />
                </View>



                <View style={{ marginTop: 20, margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ backgroundColor: 'white', borderWidth: 1, height: 75, borderColor: "#CDCDCD", borderRadius: 8, width: 60 }}>
                        <View style={{ backgroundColor: '#42A7E5', height: 50, justifyContent: 'center', width: 50, alignItems: 'center', borderRadius: 8, marginTop: 5, marginStart: 3 }}>
                            <Icons name="fast-food" size={30} color={'white'} />
                        </View>
                        <Text style={{ fontSize: 15, alignSelf: "center", color: "#4f658b" }}>Food</Text>
                    </View>



                    <View style={{ backgroundColor: 'white', borderWidth: 1, height: 75, borderColor: "#CDCDCD", borderRadius: 8, width: 60 }}>
                        <View style={{ backgroundColor: '#FF6B53', height: 50, justifyContent: 'center', width: 50, alignItems: 'center', borderRadius: 8, marginTop: 5, marginStart: 3 }}>
                            <Drink name="coffee" size={30} color={'white'} />
                        </View>
                        <Text style={{ fontSize: 15, alignSelf: "center", color: "#4f658b" }}>Drinks</Text>
                    </View>


                    <View style={{ backgroundColor: 'white', borderWidth: 1, height: 75, borderColor: "#CDCDCD", borderRadius: 8, width: 60 }}>
                        <View style={{ backgroundColor: '#84CA93', height: 50, justifyContent: 'center', width: 50, alignItems: 'center', borderRadius: 8, marginTop: 5, marginStart: 3 }}>
                            <Color name="fastfood" size={30} color={'white'} />
                        </View>
                        <Text style={{ fontSize: 15, alignSelf: "center", color: "#4f658b" }}>Snack</Text>
                    </View>


                    <View style={{ backgroundColor: 'white', borderWidth: 1, height: 75, borderColor: "#CDCDCD", borderRadius: 8, width: 60 }}>
                        <View style={{ backgroundColor: '#A183E0', height: 50, justifyContent: 'center', width: 50, alignItems: 'center', borderRadius: 8, marginTop: 5, marginStart: 3 }}>
                            <Hand name="cupcake"
                                size={30} color={'white'} />
                        </View>
                        <Text style={{ fontSize: 15, alignSelf: "center", color: "#4f658b" }}>Dissert</Text>
                    </View>


                    <View style={{ backgroundColor: 'white', borderWidth: 1, height: 75, borderColor: "#CDCDCD", borderRadius: 8, width: 60 }}>
                        <View style={{ backgroundColor: '#f75a5b', height: 50, justifyContent: 'center', width: 50, alignItems: 'center', borderRadius: 8, marginTop: 5, marginStart: 3 }}>
                            <Food name="hamburger"
                                size={30} color={'white'} />
                        </View>
                        <Text style={{ fontSize: 15, alignSelf: "center", color: "#4f658b" }}>Food</Text>
                    </View>
                </View>


                <View>
                    <View>
                        <FlatList
                            data={cards} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item }) => <List cards={item} keyExtractor={item => item.id}
                            />} />
                        <View style={{ marginTop: 20, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: "black", fontWeight: "bold" }}>Recomended 👌</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('Flipcard')}>
                                <Text  style={{ color: "#1EC1FF", marginRight: 10 }}>View more</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={food} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item }) => <Dish food={item} />} />
                    </View>
                    <View style={{ marginLeft: 10, }}>
                        <View>
                            <Text style={{ color: "black", fontWeight: "500", }}>Trending this week 🔥</Text>
                        </View>
                        <FlatList
                            data={cartcard} vertical renderItem={({ item }) => <CartCard cartcard={item} />}> </FlatList>
                    </View>
                </View>


                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Viewmore")}>
                        <Text style={Styles.account}>VIEW MORE</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default SigninScreen;

const Styles = StyleSheet.create({
    searchcontainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "#CDCDCD",
        margin: 8

    },
    card: {
        marginTop: 20,
        backgroundColor: "pink",
        height: 100,
        flex: 1,
        marginLeft: 20,
        width

    },
    card1: {
        backgroundColor: "#2C406E",
        borderRadius: 10,
        height: 130,
        width: 120,
        margin: 10,
    },
    cartscreen: {
        marginTop: 20,
        backgroundColor: "white",
        shadowColor: "black",
        borderRadius: 10,
        shadowOpacity: 100,
        padding: 2,
        margin:5,
        marginRight:20,
        elevation: 2,
        flexDirection: "row",
        alignItems: "center"

    },
    account: {
        color: "#1EC1FF",
        verticalAlign: "middle",
        fontSize: 15,
        textAlign: 'center',
        height: 40,
        width: "95%",
        alignSelf: "center",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#42A7E5",
        margin: 10
    }



})