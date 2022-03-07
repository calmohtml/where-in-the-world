import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home/Home";
import Country from "./screens/Country/Country";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Country" component={Country} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* 
Variables:

BASE_URL + /all, 
BASE_URL + /name/{name}, 
BASE_URL + /alpha/{code}, 
BASE_URL + /currency/{currency}, 
BASE_URL + /lang/{lang}, 
BASE_URL + /capital/{capital}, 
BASE_URL + /region/{region}, 
BASE_URL + /subregion/{region} 
*/

/* data.map((country) => (
    <li key={country.alpha3Code}>
      <Link
        passHref
        href={`/${country.region.toLowerCase()}/${country.alpha3Code.toLowerCase()}`}
      >
        <h2>
          <a>{`${country.name}`}</a>
        </h2>
      </Link>
      <Image
        src={country.flag}
        alt={`Flag of ${country.name}`}
        width={250}
        height={250}
        objectFit="contain"
        objectPosition="center"
        loading="eager"
        quality={50}
        placeholder="empty"
      />
    </li>
  )); */

{
  /* <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={country.cca3}
          renderItem={(country) => (
            <Text>
              {country.name.common}, {country.region.toLowerCase()}
            </Text>
          )}
        />
      )}
    </View> */
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

  data.map(({ cca3, name, population, region, capital }) => (
          <View key={cca3}>
            <Text>{name.common}</Text>
            <Text>Population: {population}</Text>
            <Text>Region: {region}</Text>
            <Text>Capital: {capital}</Text>
          </View>
        ))
  */
}
