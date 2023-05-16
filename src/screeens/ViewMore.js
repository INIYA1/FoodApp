import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import iconlist from './iconlist';
import foodlist from './foodlist'
import coffeelist from './coffeelist';




const ViewMore = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState([]);

    const validateSelectVal = (id) => {
        if (selectedValue.includes(id)) {
            var ind = selectedValue.indexOf(id);
            selectedValue.splice(ind, 1);
        } else {
            selectedValue.push(id);
        }

        setSelectedValue([...selectedValue]);
    };


    const Card = ({ details, onSelect, selectedValue }) => {
        const { price, id, img, foodname, tag } = details;


        return (
            <><View style={Styles.foodlist}>
                <View style={{ position: 'absolute', }}>
                    <Text style={{ fontSize: 18, marginLeft: 10, color: "#4f658b" }} onPress={() => navigation.navigate("Products")} >{foodname}</Text>
                    <Text style={{ marginLeft: 10 }}>{tag}</Text>
                    <Text style={{ marginLeft: 10, color: "#4f658b", fontWeight: "900" }}>{price}</Text></View>

                <View style={{ flexDirection: 'row', marginLeft: 40 }}>

                    <Image style={{ height: 70, width: 70, borderRadius: 5, flexDirection: 'row', marginLeft: 280 }} source={img}>
                    </Image>
                    <TouchableOpacity style={{ position: "absolute", marginLeft: 50, }}
                        onPress={() => {
                            onSelect(id);
                        }}>

                        <Icons name="md-heart" size={18} style={[Styles.iconStyle, { color: selectedValue.includes(id) ? 'red' : 'white' }]} />

                    </TouchableOpacity>
                </View></View></>
        )
    }



    const CardA = ({ details, onSelect, selectedValue }) => {
        const { price, id, img, foodname, tag } = details;


        return (
            <><View style={Styles.foodlist}>
                <View style={{ position: 'absolute', }}>
                    <Text style={{ fontSize: 18, marginLeft: 10, color: "#4f658b" }} onPress={() => navigation.navigate("Products")} >{foodname}</Text>
                    <Text style={{ marginLeft: 10 }}>{tag}</Text>
                    <Text style={{ marginLeft: 10, color: "#4f658b", fontWeight: "900" }}>{price}</Text></View>

                <View style={{ flexDirection: 'row', marginLeft: 40 }}>

                    <Image style={{ height: 70, width: 70, borderRadius: 5, flexDirection: 'row', marginLeft: 280 }} source={img}>
                    </Image>
                    <TouchableOpacity style={{ position: "absolute", marginLeft: 50, }}
                        onPress={() => {
                            onSelect(id);
                        }}>

                        <Icons name="md-heart" size={18} style={[Styles.iconStyle, { color: selectedValue.includes(id) ? 'red' : 'white' }]} />

                    </TouchableOpacity>
                </View></View></>
        )
    }


    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignSelf: "flex-start", marginTop: 25 }}>

                    <Icons name="md-chevron-back" size={25} color="grey"
                        onPress={() => navigation.navigate("Signin")} />
                    <Text style={{ color: "#11547d", fontSize: 19, fontWeight: "500" }}>Product</Text>

                    <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                        <Icons name="cart" size={25} color={"#2C406E"} />

                        <Icon name="filter" size={20} color={"#2C406E"} style={{ alignSelf: "flex-end" }} />
                    </View>
                </View>






                <View style={Styles.searchcontainer}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                        <Icon name="search" size={15} />
                    </View>
                    <TextInput
                        placeholder="Search beverges or foods" />
                </View>





                <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: "row" }}>
                        {iconlist.map((list, index) => (
                            <View key={index} style={[Styles.iconlist, { backgroundColor: list.color }]}>
                                <View style={{ flexDirection: "row" }}>
                                    <ImageBackground style={{ height: 20, width: 20 }} source={list.img}></ImageBackground>
                                    <Text>{list.name}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>




                <View>
                    <Text style={{ fontSize: 20, color: "#2C406E", marginTop: 20, marginLeft: 20 }} onPress={() => navigation.navigate("Products")} >Expression & Classic</Text>
                </View>


                {/* FOOD LIST */}
                <View>
                    {foodlist.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                selectedValue={selectedValue}
                                details={item}
                                onSelect={(id) => validateSelectVal(id)} />
                        )
                    })}
                </View>


                <View>
                    <Text
                        onPress={() => navigation.navigate("Mycart")}
                        style={{ fontSize: 20, color: "#2C406E", marginTop: 20, marginLeft: 20 }}>Cold Brew</Text>
                </View>


                {/*COFFEE LIST  */}

                <View>
                    {coffeelist.map((item, index) => {
                        return (
                            <CardA
                                key={index}
                                selectedValue={selectedValue}
                                details={item}
                                onSelect={(id) => validateSelectVal(id)} />
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>




    )
}

export default ViewMore


const Styles = StyleSheet.create({
    searchcontainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "#CDCDCD",
        margin: 10,
        marginTop: 20
    },
    iconlist: {
        flexDirection: "row",
        marginTop: 20,
        backgroundColor: "white",
        height: 40,
        padding: 10,
        marginLeft: 20,
        width: 80,
        borderRadius: 6,
        borderColor: "#e9ecef",
        borderWidth: 1
    },
    foodlist: {

        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: "white",
        margin: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#e9ecef"

    },
    iconStyle: {
        position: 'absolute',
        color: 'white',
        marginLeft: 235
    }
})
