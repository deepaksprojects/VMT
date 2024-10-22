import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const Login = () => {
  function handlePress() {
    router.navigate("/auth/otp?mobile=999999");
  }
  return (
    <View>
      <Text>Login</Text>
      <Button title="Next" onPress={handlePress} />
    </View>
  );
};

export default Login;
