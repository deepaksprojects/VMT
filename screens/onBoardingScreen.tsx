import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const OnBoardingScreen = () => {
  function handlePress() {
    router.navigate("/auth/login");
  }
  return (
    <View>
      <Text>onBoarding</Text>
      <Button title="Next" onPress={handlePress} />
    </View>
  );
};

export default OnBoardingScreen;
