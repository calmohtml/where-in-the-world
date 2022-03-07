import { View, Text, Button } from "react-native";
import React from "react";

export default function Country({ route, navigation }) {
  const { countryName } = route.params;
  console.log(countryName);

  return (
    <View>
      <Text>Country</Text>
      <Button title="Go back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
