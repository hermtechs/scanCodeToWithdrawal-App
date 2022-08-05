// import { StatusBar } from 'expo-status-bar';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app ok!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// console.log('hello')
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>

  return (
    <NavigationContainer>{
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/qnb-logo.png")} />
    
      <StatusBar style="auto" />
      <View style={styles.loginContainer}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#060632"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#060632"
          outlineStyle= "none"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
    <TouchableOpacity style={styles.loginBtn} >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      </View>
    </View>
    } </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    opacity:0.9,
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 60,
    height:150,
    width:250
  },
 
  inputView: {
    backgroundColor: "#ccc",
    borderRadius: 5,
    width: "57%",
    height: 35,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"#ccc",
    border:"2px solid #fff",
    padding:2,
    borderRadius:6
  },
 
  loginBtn: {
    width: "60%",
    // borderRadius: 5,
    height: 35,
    alignItems: "center",
    fontSize:20,
    justifyContent: "center",
    marginTop: 35,
    backgroundColor: "#fff",
    borderRadius:4
  },
  loginText:{
    color:"#060632",
    fontWeight:"600"
  },
  loginContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    backgroundColor:'#870052',
    borderTopRightRadius:25,
    borderTopLeftRadius:25
  }
});
