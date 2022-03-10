import { View, Text, Button, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";

export default function Country({ route, navigation }) {
  const { countryName } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const BASE_URL = "https://restcountries.com/v3.1/";
  const url = BASE_URL + `/name/${countryName}?fullText=true`;
  const numbro = require("numbro");
  /* const { data, loading, error } = useFetch(url); */

  useEffect(() => {
    //This code will run when the component renders
    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (error) {
    console.log(error);
  }

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View>
          {data.map(
            ({
              cca3,
              population,
              region,
              subregion,
              capital,
              tld,
              currencies,
              languages,
              name: { common, nativeName },
            }) => (
              <View key={cca3}>
                <Text>{common}</Text>
                <Text>Native name: {Object.values(nativeName)[0].common}</Text>
                <Text>
                  Population:{" "}
                  {numbro(population).format({ thousandSeparated: true })}
                </Text>
                <Text>Region: {region}</Text>
                <Text>Subregion: {subregion}</Text>
                <Text>Capital: {capital}</Text>
                <Text>Top level domain: {tld[0]}</Text>
                <Text>Currencies: {Object.values(currencies)[0].name}</Text>
                <Text>Languages: {Object.values(languages)[0]}</Text>
              </View>
            )
          )}
        </View>
      )}
      <Button title="Go back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
