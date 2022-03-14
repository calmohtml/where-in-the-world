import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Home from "./screens/Home/Home";
import Country from "./screens/Country/Country";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    "NunitoSans-Light": require("./assets/fonts/NunitoSans-Light.ttf"),
    "NunitoSans-SemiBold": require("./assets/fonts/NunitoSans-SemiBold.ttf"),
    "NunitoSans-ExtraBold": require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
