import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { TextInput } from 'react-native-paper';

export default function Apintegration({ navigation }) {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    useEffect(() => {

        // get method in axios api 


        axios.get('https://mocki.io/v1/2567156b-c409-4230-a4b9-a7ac366b4762')
            .then(abc => setUsers(abc.data))
    })

    const postUser = () => {
        axios.post('https://jsonplaceholder.typicode.com/users', { name: users })
            .then(abc => console.log(abc.data))
    }



    // axios.get("https://mocki.io/v1/2567156b-c409-4230-a4b9-a7ac366b4762")
    // .then(abc => console.log(abc.data))


    // fetch('https://jsonplaceholder.typicode.com/users')
    //  .then(Res =>Res.json())
    //  .then(res=>console.log(res))





    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                    <Icons name="chevron-back-circle" size={35} color={"#2C406E"} marginTop={12} />
                </TouchableOpacity>
                <Text style={{ marginTop: 20 }}>Apintegration</Text>
            </View>
            {users.map((item, index) => {
                return (
                    <View style={styles.list} key={index}>
                        <View style={styles.card}>
                            <TouchableOpacity>
                                <Text style={styles.textA}>{item.name}</Text>
                                <Text style={styles.textB}>{item.team}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}


            <TextInput
                placeholder="Name"
                onChangeText={(name) => setName(name)}
            />
            <TouchableOpacity style={styles.btnStyle} onPress={postUser}>
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white', fontWeight: 'bold' }}>Post</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 15,
    },

    backIcon: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderColor: '#bfbfbf',
    },

    list: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        backgroundColor: 'white',
        elevation: 6,
        borderColor: 'grey',
        height: 70,
        width: 350,
        borderRadius: 10,
        margin: 10,
    },

    textA: {
        fontSize: 22,
        fontWeight: 800,
        color: 'black',
        textAlign: 'center',
    },

    textB: {
        fontSize: 18,
        fontWeight: 500,
        color: 'black',
        textAlign: 'center',
    },
    btnStyle: {
        alignContent: 'center',
        backgroundColor: '#56ABFF',
        height: 40,
        width: "80%",
        justifyContent: 'center',
        margin: 20,
        alignSelf: 'center'
    }
});

