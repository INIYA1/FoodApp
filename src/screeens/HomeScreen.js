import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PasswordIcon from 'react-native-vector-icons/Foundation';
import LanguageModal from './LanguageModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translation } from './utils';

// import{TextInput as TextInputPaper} from 'react-native-paper'

const HomeScreen = ({ navigation }) => {
    
    
            //  ASYNC STORAGE (SET AND GET NAME )
    
    const [name, setName] = useState('')
    const setData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please Enter Your Name')
        } else {
            try {
                await AsyncStorage.setItem('User Name', name)
                navigation.navigate("Signin")
            } catch (error) {
                console.log(error)
            }
        }
    }
    


            // LANGUAGE (ASYNC STORAGE)
    
    const [languageModalVisible, setLangModalVisible] = useState(false)
    const [selectedLang, setSelectedLang] = useState(0)

    const saveSelectedLang = async (index) => {
        await AsyncStorage.setItem('LANG', index)
    }
 
      

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white"
        }}
            showsVerticalScrollIndicator={false}>
            <ImageBackground source={{ uri: 'https://wallpaper.dog/large/20574662.jpg' }}
                style={{
                    borderRadius: 25,
                }}>
                <View style={Styles.brandView}>
                    <Text style={Styles.brandView}>Foodia</Text>
                    <Text style={{
                        color: '#C0C0C0',
                        fontSize: 13,
                        marginBottom: 50
                    }} >Restaurant App</Text>
                </View>
            </ImageBackground>
            <View style={Styles.bottomView}>
                <View style={{ padiing: 40 }}>
                <Text style={Styles.Text}>Welcome back</Text>
                    <Text style={{ marginLeft: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
                </View>


                <View style={{ marginTop: 50 }}>
                    <View style={Styles.input}>
                        <View style={{ justifyContent: "center", alignItems: "center", margin: 10 }}>
                            <Icon name="person" size={25} />
                        </View>
                        <TextInput
                            placeholder="Name"
                            onChangeText={(name) => setName(name)}
                        />
                    </View>
                    <View style={Styles.input}>
                        <View style={{ justifyContent: "center", alignItems: "center", margin: 10 }}>
                            <PasswordIcon name="lock" size={25} />
                        </View>
                        <TextInput
                            placeholder="Password"
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={setData}>
                            {/* // onPress={() => navigation.navigate("Signin")}> */}
                            <Text style={Styles.button}>{selectedLang == 0 ? translation[0].English : selectedLang == 1 ? translation[0].
                                Tamil : selectedLang == 2 ? translation[0].Hindi : selectedLang == 3 ? translation[0].Punjabi : selectedLang == 4 ? translation[0].Urdu : null}</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Password")}>
                        <Text style={{
                            alignSelf: "flex-end", color: "#1EC1FF",
                            marginTop: 20
                        }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View>

                    <Text style={{
                        alignSelf: "flex-start",
                    }}>Keep Sign In</Text>
                </View>
                {/* <View>
            <CheckBox title="Reading"
                checked={checked}
                onPress={()=>setChecked(!checked)}/>
            </View> */}

                <View>

                    <TouchableOpacity>
                        <Text style={{
                            alignSelf: "center", color: "#1EC1FF",
                            marginTop: 10
                        }}>Don't have an account?</Text>
                    </TouchableOpacity>
                </View>


                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("User")}>
                        <Text style={Styles.account}>CREATE AN ACCOUNT
                            (userlogin)</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={Styles.languageBtn}
                        onPress={() => {
                            setLangModalVisible(!languageModalVisible)
                        }}>
                        <Text> Select Language </Text>
                    </TouchableOpacity>
                    <LanguageModal langModalVisible={languageModalVisible} setLangModalVisible={setLangModalVisible}
                        onSelectLang={(x) => {
                            setSelectedLang(x)
                            saveSelectedLang(x)
                        }}
                    />
                </View>

                {/* <View> */}
                {/* <TextInputPaper  label="Flat input" disabled={true} /> */}
                {/* <TextInputPaper   placeholder='Name' aria-disabled={true}  /> */}
                {/* </View> */}
            </View>


        </SafeAreaView>
    )
}

export default HomeScreen;

const Styles = StyleSheet.create({
    brandView: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'ebrima',
        alignItems: 'center',
        marginTop: 20
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#000080',
        fontFamily: 'ebrima',
        margin: 20
    },
    input: {
        borderBottomWidth: 0.5,
        // borderBottomColor: '#000',
        // borderEndWidth:500,
        flexDirection: "row"
    },
    button: {
        color: "white",
        verticalAlign: "middle",
        backgroundColor: "#1EC1FF",
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        height: 50,
        width: "95%",
        alignSelf: "center",
        borderRadius: 50,
        marginTop: 20,
    },
    account: {
        color: "#474747",
        verticalAlign: "middle",
        backgroundColor: "#ECECEC",
        fontSize: 15,
        textAlign: 'center',
        height: 50,
        width: "95%",
        alignSelf: "center",
        borderRadius: 50,
        marginTop: 20,
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: "white",
        bottom: 50,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,


    },
    languageBtn: {
        width: '80%',
        height: 45,
        backgroundColor: '#1EC1FF',
        borderRadius: 50,
        // position:'absolute',
        alignSelf: 'center',
        // bottom:20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    }



})