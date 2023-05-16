

import React, { useState, useEffect } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/app';
// import firebase from 'firebase';

const firebaseConfig = {
    // This Project Firebase project config
    // This can be found in your project settings in the Firebase Console
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAZ7o4M5xqz3BdMCxqMda4BpjVOrrpMNyY",
    authDomain: "auth--app-b6b33.firebaseapp.com",
    databaseURL: "https://auth--app-b6b33-default-rtdb.firebaseio.com",
    projectId: "auth--app-b6b33",
    storageBucket: "auth--app-b6b33.appspot.com",
    messagingSenderId: "611611911675",
    appId: "1:611611911675:web:f267854dbf28b1a2b5175e",
    measurementId: "G-N59XV41B2K"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function FireBase() {
    const [sno, setSno] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [empage, setEmpAge] = useState('');


    const create = () => {
        database()
            .ref(`users/${sno}`).set({
                username: username,
                email: email
            });

        database()
            .ref(`users/${sno}`)
            .update({
                username: username,
                email: email,
                empage: empage
            });
    };

    const readData = () => {
        database().ref(`users/${sno}`)
            .on('value', (snapshot) => {
                console.log('User data', snapshot.val())
                const data = snapshot.val();
                if (data) {
                    setEmail(data.email);
                    setUsername(data.username);
                    setEmpAge(data.empage);
                } else {
                    setEmail('');
                    setUsername('');
                    setEmpAge('');
                }
            });
    };

    const readDataOnce = () => {
        database()
            .ref(`users/${sno}`)
            .once('value')
            .then((snapshot) => {
                console.log('User data: ', snapshot.val());
                const data = snapshot.val();
                if (data) {
                    setEmail(data.email);
                    setUsername(data.username);
                    setEmpAge(data.empage);
                } else {
                    setEmail('');
                    setUsername('');
                    setEmpAge('');
                }
            });
    };

    const deleteData = () => {
        database().ref(`users/${sno}`).remove().then(() => {
            Alert.alert('Data removed');
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>🔥 CUSTOMER ACCOUNT 👩‍🦰</Text>


            <Text style={styles.text}>S.No :</Text>
            <TextInput
                style={styles.textBoxes}
                value={sno}
                onChangeText={(sno) => setSno(sno)}
                placeholder="Enter your S.No"
            />


            <Text style={styles.text}>Name :</Text>
            <TextInput
                style={styles.textBoxes}
                value={username}
                onChangeText={(username) => setUsername(username)}
                placeholder="Enter your Name"
            />

            <Text style={styles.text}>e-mail :</Text>
            <TextInput
                style={styles.textBoxes1}
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder="Enter your email"
            />
            <Text style={styles.text}>Age :</Text>
            <TextInput
                style={styles.textBoxes}
                value={empage}
                onChangeText={(empage) => setEmpAge(empage)}
                placeholder="Enter your Age"
            />

            <TouchableOpacity style={styles.button} onPress={create}>
                <Text style={styles.text2}>SUBMIT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={readData}>
                <Text style={styles.text2}>GET (on)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={readDataOnce}>
                <Text style={styles.text2}>GET (once)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={deleteData}>
                <Text style={styles.text2}>DELETE</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textBoxes: {
        width: '90%',
        fontSize: 15,
        padding: 10,
        marginLeft: 20,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: 'rgba(151, 151, 151, 0.2)'
    },
    textBoxes1: {
        width: '90%',
        fontSize: 15,
        padding: 10,
        marginLeft: 20,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: 'rgba(151, 151, 151, 0.2)'
    },
    text1: {
        marginTop: 20,
        color: 'black',
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'fantasy',
        fontWeight: 'bold',
        borderBottomWidth: 1
    },
    text: {
        color: 'black',
        marginLeft: 10,
        fontSize: 18,
        marginTop: 20
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: 'black',
        width: '40%',
        height: 40,
        borderRadius: 8
    },
    button1: {
        alignSelf: 'center',
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: 'black',
        width: '40%',
        height: 40,
        borderRadius: 8,

    },
    text2: {
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '900'
    }

})





// // import { View, Text } from 'react-native'
// // import React from 'react'

// // export default function MedicineScreen() {
// //   return (
// //     <View>
// //       <Text>MedicineScreen</Text>
// //     </View>
// //   )
// // }

// import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
// import React, { useState, useEffect } from 'react';
// import { ref, set, update, onValue, remove } from '@react-native-firebase/database';
// import db from './setup';
// import { database } from './setup';
// // import { create } from 'react-test-renderer';




// export default function MedicineScreen() {

//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')

//     function create() {

//         // set or create data
//         db
//             .ref('users/')
//             .set({
//                 username : username,
//                 email : email,
//             })
//             .then(() => Alert.alert('Success, Created a new data'));
//         // set(ref(db, 'users/' + username), {
//         //     username: username,
//         //     email: email,
//         // }).then(() => {
//         //     Alert.alert('Success, Created a new data');
//         // }).catch((error) => {
//         //     Alert.alert(error);
//         // })

//         update(ref(db, 'users/' + username), {
//             username: username,
//             email: email,
//         }).then(() => {
//             Alert.alert('Success, Updated the data');
//         }).catch((error) => {
//             Alert.alert(error);
//         })
//     }

//     function readData() {
//         useEffect(() => {
//             database()
//                 .ref('/users/' + username)
//                 .on('value')
//                 .then(snapshot => {
//                     const data = snapshot.val();
//                     setEmail(data.email);
//                     // console.log('User data: ', snapshot.val());
//                 });

//             // const starCountRef = ref(db, 'users/' + username);
//             // onValue(starCountRef).once('value').then((snapshot) => {
//             //     const data = snapshot.val();
//             //     setEmail(data.email);
//             //     //Alert.alert('Success, Read data');
//             // }).catch((error) => {
//             //     Alert.alert(error);
//             // });
//         })


//         // (snapshot) => {
//         //     const data = snapshot.val();
//         //     setEmail(data.email);
//         // }
//     }

//     function deleteData() {
//         remove(ref(db, 'users/' + username)).then(() => {
//             Alert.alert('Success, Deleted the data');
//         }).catch((error) => {
//             Alert.alert(error);
//         });
//         //Alert.alert('removed');
//     }


//     return (
//         <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: '100%', width: '100%' }}>
//             <Text>MedicalScreen</Text>
//             <TextInput style={styles.textBoxes}
//                 value={username}
//                 onChangeText={(username) => { setUsername(username) }}
//                 placeholder="Usrname">
//             </TextInput>

//             <TextInput style={styles.textBoxes}
//                 value={email}
//                 onChangeText={(email) => { setEmail(email) }}
//                 placeholder="Email">
//             </TextInput>
//             <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                 <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 10, padding: 10, height: 40, width: 150, margin: 5 }} onPress={create}>
//                     <Text style={{ color: 'white', fontWeight: '800', textAlign: 'center' }}>ADD or UPDATE</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 10, padding: 10, height: 40, width: 150, margin: 5 }} onPress={readData}>
//                     <Text style={{ color: 'white', fontWeight: '800', textAlign: 'center' }}>READ</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 10, padding: 10, height: 40, width: 150, margin: 5 }} onPress={deleteData}>
//                     <Text style={{ color: 'white', fontWeight: '800', textAlign: 'center' }}>DELETE</Text>
//                 </TouchableOpacity>
//             </View>

//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     textBoxes: {
//         width: '80%',
//         fontSize: 18,
//         padding: 12,
//         borderColor: 'black',
//         borderBottomWidth: 0.3,
//         margin: 10,
//     }

// })






// import React, { useState, useEffect } from 'react';
// import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import database from '@react-native-firebase/database';
// import { firebase } from '@react-native-firebase/app';
// // import firebase from 'firebase';

// const firebaseConfig = {
//   // This Project Firebase project config
//   // This can be found in your project settings in the Firebase Console

//   apiKey: "AIzaSyAZ7o4M5xqz3BdMCxqMda4BpjVOrrpMNyY",
//   authDomain: "auth--app-b6b33.firebaseapp.com",
//   databaseURL: "https://auth--app-b6b33-default-rtdb.firebaseio.com",
//   projectId: "auth--app-b6b33",
//   storageBucket: "auth--app-b6b33.appspot.com",
//   messagingSenderId: "611611911675",
//   appId: "1:611611911675:web:f267854dbf28b1a2b5175e",
//   measurementId: "G-N59XV41B2K",
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export default function FireBase() {
//   const [sno, setSno] =useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [empage, setEmpAge] = useState('');


//   const create = () => {
//     database()
//     .ref(`users/${sno}`).set({
//       username: username,
//       email: email
//     });

//     database()
//       .ref(`users/${sno}`)
//       .update({
//         username: username,
//         email: email,
//         empage: empage
//       });
//   };

//   const readData = () => {
//     database().ref(`users/${sno}`)
//       .on('value', (snapshot) => {
//         console.log('User data', snapshot.val())
//         const data = snapshot.val();
//         if (data) {
//           setEmail(data.email);
//           setUsername(data.username);
//           setEmpAge(data.empage);
//         } else {
//           setEmail('');
//           setUsername('');
//           setEmpAge('');
//         }
//       });
//   };

//   const readDataOnce = () => {
//     database()
//       .ref(`users/${sno}`)
//       .once('value')
//       .then((snapshot) => {
//         console.log('User data: ', snapshot.val());
//         const data = snapshot.val();
//         if (data) {
//           setEmail(data.email);
//           setUsername(data.username);
//           setEmpAge(data.empage);
//         } else {
//           setEmail('');
//           setUsername('');
//           setEmpAge('');
//         }
//       });
//   };

//   const deleteData = () => {
//     database().ref(`users/${sno}`).remove().then(() => {
//       Alert.alert('Data removed');
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text1}>🔥 CUSTOMER ACCOUNT 👩‍🦰</Text>


//       <Text style={styles.text}>S.No :</Text>
//       <TextInput
//         style={styles.textBoxes}
//         value={sno}
//         onChangeText={(sno) => setSno(sno)}
//         placeholder="Enter your S.No"
//       />

      
//       <Text style={styles.text}>Name :</Text>
//       <TextInput
//         style={styles.textBoxes}
//         value={username}
//         onChangeText={(username) => setUsername(username)}
//         placeholder="Enter your Name"
//       />

//       <Text style={styles.text}>e-mail :</Text>
//       <TextInput
//         style={styles.textBoxes1}
//         value={email}
//         onChangeText={(email) => setEmail(email)}
//         placeholder="Enter your email"
//       />
//       <Text style={styles.text}>Age :</Text>
//       <TextInput
//         style={styles.textBoxes}
//         value={empage}
//         onChangeText={(empage) => setEmpAge(empage)}
//         placeholder="Enter your Age"
//       />

// <TouchableOpacity style={styles.button} onPress={create}>
//         <Text style={styles.text2}>SUBMIT</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button1} onPress={readData}>
//         <Text style={styles.text2}>GET (on)</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button1} onPress={readDataOnce}>
//         <Text style={styles.text2}>GET (once)</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button1} onPress={deleteData}>
//         <Text style={styles.text2}>DELETE</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   textBoxes: {
//     width: '90%',
//     fontSize: 15,
//     padding: 10,
//     marginLeft: 20,
//     borderRadius: 5,
//     marginTop: 20,
//     backgroundColor: 'rgba(151, 151, 151, 0.2)'
//   },
//   textBoxes1: {
//     width: '90%',
//     fontSize: 15,
//     padding: 10,
//     marginLeft: 20,
//     borderRadius: 5,
//     marginTop: 20,
//     backgroundColor: 'rgba(151, 151, 151, 0.2)'
//   },
//   text1: {
//     marginTop: 20,
//     color: 'black',
//     alignSelf: 'center',
//     fontSize: 20,
//     fontFamily: 'fantasy',
//     fontWeight: 'bold',
//     borderBottomWidth: 1
//   },
//   text: {
//     color: 'black',
//     marginLeft: 10,
//     fontSize: 18,
//     marginTop: 20
//   },
//   button: {
//     alignSelf: 'center',
//     justifyContent: 'center',
//     marginTop: 30,
//     backgroundColor: 'black',
//     width: '40%',
//     height: 40,
//     borderRadius: 8
//   },
//   button1: {
//     alignSelf: 'center',
//     justifyContent: "center",
//     marginTop: 10,
//     backgroundColor: 'black',
//     width: '40%',
//     height: 40,
//     borderRadius: 8,

//   },
//   text2: {
//     color: 'white',
//     alignSelf: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '900'
//   }

// })




















// // import React, { useState } from 'react';
// // import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// // import database from '@react-native-firebase/database';

// // export default function FireBase() {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');

// //   const create = () => {
// //     database().ref(`users/${username}`).set({
// //       username: username,
// //       email: email
// //     });

// //     database()
// //       .ref(`users/${username}`)
// //       .update({
// //         username: username,
// //         email: email
// //       });
// //   };

// //   const readData = () => {
// //     database().ref(`users/${username}`)
// //       .on('value', (snapshot) => {
// //         const data = snapshot.val();
// //         setEmail(data.email);
// //       });
// //   };

// //   const readDataOnce = () => {
// //     database()
// //       .ref(`users/${username}`)
// //       .once('value', (snapshot) => {
// //         const data = snapshot.val();
// //         setEmail(data.email);
// //       });
// //   };

// //   const deleteData = () => {
// //     database().ref(`users/${username}`).remove().then(() => {
// //       Alert.alert('Data removed');
// //     });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text1}>🔥 CUSTOMER ACCOUNT 👩‍🦰</Text>
// //       <Text style={styles.text}>Name :</Text>
// //       <TextInput
// //         style={styles.textBoxes}
// //         value={username}
// //         onChangeText={(username) => setUsername(username)}
// //         placeholder="Enter your Name"
// //       />

// //       <Text style={styles.text}>e-mail :</Text>
// //       <TextInput
// //         style={styles.textBoxes1}
// //         value={email}
// //         onChangeText={(email) => setEmail(email)}
// //         placeholder="Enter your email"
// //       />

//       {/* <TouchableOpacity style={styles.button} onPress={create}>
//         <Text style={styles.text2}>SUBMIT</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button1} onPress={readData}>
//         <Text style={styles.text2}>GET (on)</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button1} onPress={readDataOnce}>
//         <Text style={styles.text2}>GET (once)</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button1} onPress={deleteData}>
//         <Text style={styles.text2}>DELETE</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }



// //   const create = () => {
// //     set(ref(db, `users/${username}`), {
// //       username: username,
// //       email: email
// //     });

// //     update(ref(db, `users/${username}`), {
// //       username: username,
// //       email: email
// //     });
// //   };
   


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   textBoxes: {
//     width: '90%',
//     fontSize: 15,
//     padding: 10,
//     marginLeft: 20,
//     borderRadius: 5,
//     marginTop: 20,
//     backgroundColor: 'rgba(151, 151, 151, 0.2)'
//   },
//   textBoxes1: {
//     width: '90%',
//     fontSize: 15,
//     padding: 10,
//     marginLeft: 20,
//     borderRadius: 5,
//     marginTop: 20,
//     backgroundColor: 'rgba(151, 151, 151, 0.2)'
//   },
//   text1: {
//     marginTop: 20,
//     color: 'black',




//     alignSelf: 'center',
//     fontSize: 20,
//     fontFamily: 'fantasy',
//     fontWeight: 'bold',
//     borderBottomWidth: 1
//   },
//   text: {
//     color: 'black',
//     marginLeft: 10,
//     fontSize: 18,
//     marginTop: 20
//   },
//   button: {
//     alignSelf: 'center',
//     justifyContent: 'center',
//     marginTop: 30,
//     backgroundColor: 'black',
//     width: '40%',
//     height: 40,
//     borderRadius: 8
//   },
//   button1: {
//     alignSelf: 'center',
//     justifyContent: "center",
//     marginTop: 10,
//     backgroundColor: 'black',
//     width: '40%',
//     height: 40,
//     borderRadius: 8,

//   },
//   text2: {
//     color: 'white',
//     alignSelf: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: '900'
//   }

// }) */}
