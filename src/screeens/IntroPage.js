// // import React from "react";
// // import { Image, ImageBackground } from "react-native";
// // import { Text, TouchableOpacity, View } from "react-native";
// // import Swiper from "react-native-web-swiper";

// // const IntroPage = () => {
// //   return (
// //     <View style={{ flex: 1 }}>
// //       <View style={{ flex: 1 }}>
// //         <Swiper
// //           from={1}
// //           minDistanceForAction={0.1} 
// //           controlsProps={{
// //             dotsTouchable: true,
// //             prevPos: "left",
// //             nextPos: "right",
// //             nextTitle: ">",
// //             nextTitleStyle: { color: "red", fontSize: 24, fontWeight: "500" },
// //             PrevComponent: ({ onPress }) => (
// //               <TouchableOpacity onPress={onPress}>
// //                 <Text style={{ color: "white", fontSize: 24, fontWeight: "500",}}>
// //                   {"<"}
// //                 </Text>
// //               </TouchableOpacity>
// //             ),
// //           }}
// //         >
// //           <View style={{flex: 1,}}>
// //           <ImageBackground style={{flex:1}} source={{uri:'https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-background_23-2148998534.jpg?w=2000'}}>
// //           <Text style={{flex:1,fontSize:25,color:'black',justifyContent:'center',alignSelf:'center',
// //           marginTop:180}}>Your Health - Your Way</Text>
// //           </ImageBackground>
            
// //           </View>
// //           <View
// //             style={{
// //               flex: 1,
// //               alignItems: "center",
// //               justifyContent: "center",
// //               backgroundColor: "rgba(20,200,20,0.3)",
// //             }}
// //           >
// //             <Text>Slide 2</Text>
// //           </View>
// //           <View
// //             style={{
// //               flex: 1,
// //               alignItems: "center",
// //               justifyContent: "center",
// //               backgroundColor: "rgba(200,20,20,0.3)",
// //             }}
// //           >
// //             <Text>Slide 3</Text>
// //           </View>
// //         </Swiper>
// //       </View>
// //       {/* <View style={{ flex: 1 }}>
// //         <Swiper
// //           vertical
// //           loop
// //           timeout={-2.5}
// //           controlsProps={{
// //             dotActiveStyle: { backgroundColor: "red" },
// //             cellsContent: {
// //               "bottom-left": <Text>SOME LOGO</Text>,
// //             },
// //           }}
// //         >
// //           <View
// //             style={{
// //               flex: 1,
// //               alignItems: "center",
// //               justifyContent: "center",
// //               backgroundColor: "rgba(20,20,200,0.3)",
// //             }}
// //           >
// //             <Text>Slide 1</Text>
// //           </View>
// //           <View
// //             style={{
// //               flex: 1,
// //               alignItems: "center",
// //               justifyContent: "center",
// //               backgroundColor: "rgba(20,200,20,0.3)",
// //             }}
// //           >
// //             <Text>Slide 2</Text>
// //           </View>
// //           <View
// //             style={{
// //               flex: 1,
// //               alignItems: "center",
// //               justifyContent: "center",
// //               backgroundColor: "rgba(200,20,20,0.3)",
// //             }}
// //           >
// //             <Text>Slide 3</Text>
// //           </View>
// //         </Swiper>
// //       </View> */}
// //     </View>
// //   );
// // };

// // export default IntroPage;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Modal, Button } from 'react-native';


// function IntroPage() {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, world!</Text>
//       <Button title="Open Modal" onPress={() => setModalVisible(true)} />
//       <Modal
//         animationType="slide"
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modal}>
//           <Text style={styles.modalText}>This is a modal!</Text>
//           <Button title="Close Modal" onPress={() => setModalVisible(false)} />
//         </View>
//       </Modal>
//     </View>
//   );
// }

// export default IntroPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'white'
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   modal: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     marginTop: 22,
//     marginBottom: 22,
//     marginLeft: 12,
//     marginRight: 12,
//     borderRadius: 4,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 80,
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 12,
//   },
// });

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

// function IntroPage() {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, world!</Text>
//       <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
//         <Text style={styles.buttonText}>Open Modal</Text>
//       </TouchableOpacity>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modal}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>This is a modal!</Text>
//             <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
//               <Text style={styles.buttonText}>Close Modal</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }
// export default IntroPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#007aff',
//     padding: 10,
//     borderRadius: 4,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modal: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 4,
//     padding: 16,
//     paddingBottom: 24,
//     width: '100%',
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 12,
//   },
// });
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

// function IntroPage() {
//   const [modal1Visible, setModal1Visible] = useState(false);
//   const [modal2Visible, setModal2Visible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, world!</Text>
//       <TouchableOpacity style={styles.button} onPress={() => setModal1Visible(true)}>
//         <Text style={styles.buttonText}>Open Modal 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => setModal2Visible(true)}>
//         <Text style={styles.buttonText}>Open Modal 2</Text>
//       </TouchableOpacity>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modal1Visible}
//         onRequestClose={() => setModal1Visible(false)}
//       >
//         <View style={styles.modal}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>This is modal 1!</Text>
//             <TouchableOpacity style={styles.button} onPress={() => setModal1Visible(false)}>
//               <Text style={styles.buttonText}>Close Modal 1</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modal2Visible}
//         onRequestClose={() => setModal2Visible(false)}
//       >
//         <View style={styles.modal}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>This is modal 2!</Text>
//             <TouchableOpacity style={styles.button} onPress={() => setModal2Visible(false)}>
//               <Text style={styles.buttonText}>Close Modal 2</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }
// export default IntroPage
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#007aff',
//     padding: 10,
//     borderRadius: 4,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modal: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 4,
//     padding: 16,
//     paddingBottom: 24,
//     width: '100%',
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 12,
//   },
// });
// import React from 'react';
// import {View,Text} from 'react-native';

// const IntroPage =()=>{
//   return(
//     <View style={{flex:1,backgroundColor:"white"}}>
//     <View style={{height:143,width:143,backgroundColor:'#5EC6CD'}}>

//     </View>
//       <Text> HAI  </Text>
//     </View>
//   )
// }
// export default IntroPage;