import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validate email and password
    if (!email || !password) {
      Alert.alert("Error", "Please enter your email and password");
      return;
    }

    // Authenticate user with backend server
    // Here you can use any backend API for authentication
    // For simplicity, I'll just check if the email and password match the hardcoded values below
    const validEmail = "user@example.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
      Alert.alert("Success", "You have successfully logged in");
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ marginBottom: 10 }}
      />
      <Button title="Log in" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
