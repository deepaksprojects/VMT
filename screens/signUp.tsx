import { View, Text, Button } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import useUserSession from "@/hooks/useUserSession";

const SignUp = () => {
  const { updateUserToken, updateUserData, user } = useUserSession();

  function handlePress() {}
  return (
    <View>
      <Text>SignUp</Text>
      <Button title="Next" onPress={handlePress} />
    </View>
  );
};

export default SignUp;
