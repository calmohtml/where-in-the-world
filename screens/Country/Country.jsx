import { View, Text, Button, ActivityIndicator, Image } from "react-native";
import { useState, useEffect } from "react";
import styled from "styled-components/native";

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

  const HeadingOne = styled.Text`
    font-family: "NunitoSans-ExtraBold";
  `;

  const HeadingTwo = styled.Text`
    font-family: "NunitoSans-SemiBold";
  `;

  const HeadingThree = styled.Text`
    font-family: "NunitoSans-Light";
  `;

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
              flags,
              name: { common, nativeName },
            }) => (
              <View key={cca3}>
                <Image
                  source={{ uri: `${flags.png}` }}
                  style={{ width: 40, height: 40 }}
                />

                <HeadingOne>{common}</HeadingOne>

                <View style={{ flexDirection: "row" }}>
                  <HeadingTwo>Native name: </HeadingTwo>
                  <HeadingThree>
                    {Object.values(nativeName)[0].common}
                  </HeadingThree>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <HeadingTwo>Population: </HeadingTwo>
                  <HeadingThree>
                    {numbro(population).format({ thousandSeparated: true })}
                  </HeadingThree>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <HeadingTwo>Region: </HeadingTwo>
                  <HeadingThree>{region}</HeadingThree>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <HeadingTwo>Subregion: </HeadingTwo>
                  <HeadingThree>{subregion}</HeadingThree>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <HeadingTwo>Capital: </HeadingTwo>
                  <HeadingThree>{capital}</HeadingThree>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <HeadingTwo>Top level domain: </HeadingTwo>
                  <HeadingThree>{tld[0]}</HeadingThree>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <HeadingTwo>Currencies: </HeadingTwo>
                  <HeadingThree>
                    {Object.values(currencies)[0].name}
                  </HeadingThree>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <HeadingTwo>Languages: </HeadingTwo>
                  <HeadingThree>{Object.values(languages)[0]}</HeadingThree>
                </View>
              </View>
            )
          )}
        </View>
      )}
      <Button title="Go back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
