import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home/Home";
import Country from "./screens/Country/Country";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Country" component={Country} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* 
  <FlatList
    data={data}
    keyExtractor={country.cca3}
    renderItem={(country) => (
      <Text>
        {country.name.common}, {country.region.toLowerCase()}
      </Text>
    )}
  /> 
  */
}
