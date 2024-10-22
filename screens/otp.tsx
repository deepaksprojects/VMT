import { View, Text, Button } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import useUserSession from "@/hooks/useUserSession";

const OTP = () => {
  const { mobile } = useLocalSearchParams<{ mobile?: string }>();
  const { updateUserToken, updateUserData } = useUserSession();

  function handlePress() {
    console.log("query", mobile);
    updateUserToken("xxxx");
    updateUserData(mobile);
    router.navigate("/auth/signUp");
  }
  return (
    <View>
      <Text>OTP</Text>
      <Button title="Next" onPress={handlePress} />
    </View>
  );
};

export default OTP;
