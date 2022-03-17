import {
  View,
  Button,
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import Header from "../../components/Header";

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

  const Container = styled.View`
    flex: 1;
    margin: 20px 0;
    flex-direction: column;
  `;

  const HeadingOne = styled.Text`
    font-family: "NunitoSans-ExtraBold";
  `;

  const HeadingTwo = styled.Text`
    font-family: "NunitoSans-SemiBold";
  `;

  const HeadingThree = styled.Text`
    font-family: "NunitoSans-Light";
  `;

  const Country = styled.View`
    flex: 1;
    background-color: #f1f1f1;
    margin: 0 auto;
    width: 80%;
  `;

  const CountryFlagContainer = styled.View`
    display: flex;
    align-items: center;
  `;

  const CountryFlag = styled.Image`
    width: 100%;
    height: 200px;
  `;

  const CountryInfoSeparator = styled.View`
    margin-bottom: 30px;
  `;

  const CountryName = styled.View`
    margin: 10px 0;
    padding: 5px;
  `;

  const CountryInfo = styled.View`
    padding-left: 5px;
    padding-bottom: 10px;
    flex-direction: row;
  `;

  const BorderCountry = styled.Text`
    margin: 0 2.5px;
  `;

  return (
    <Container>
      <Header />
      <Button title="Go back" onPress={() => navigation.navigate("Home")} />
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Country>
          {console.log(data[0].borders)}
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
              borders,
              name: { common, nativeName },
            }) => (
              <View key={cca3}>
                <CountryFlagContainer>
                  <CountryFlag source={{ uri: `${flags.png}` }} />
                </CountryFlagContainer>
                {/* Separator */}
                <CountryName>
                  <HeadingOne>{common}</HeadingOne>
                </CountryName>
                {/* Separator */}
                <CountryInfoSeparator>
                  <CountryInfo>
                    <HeadingTwo>Native name: </HeadingTwo>
                    <HeadingThree>
                      {Object.values(nativeName)[0].common}
                    </HeadingThree>
                  </CountryInfo>
                  <CountryInfo>
                    <HeadingTwo>Population: </HeadingTwo>
                    <HeadingThree>
                      {numbro(population).format({ thousandSeparated: true })}
                    </HeadingThree>
                  </CountryInfo>
                  <CountryInfo>
                    <HeadingTwo>Region: </HeadingTwo>
                    <HeadingThree>{region}</HeadingThree>
                  </CountryInfo>
                  <CountryInfo>
                    <HeadingTwo>Subregion: </HeadingTwo>
                    <HeadingThree>{subregion}</HeadingThree>
                  </CountryInfo>
                  <CountryInfo>
                    <HeadingTwo>Capital: </HeadingTwo>
                    <HeadingThree>{capital}</HeadingThree>
                  </CountryInfo>
                </CountryInfoSeparator>
                {/* Separator */}
                <CountryInfoSeparator>
                  <CountryInfo>
                    <HeadingTwo>Top level domain: </HeadingTwo>
                    <HeadingThree>{tld[0]}</HeadingThree>
                  </CountryInfo>
                  <CountryInfo>
                    <HeadingTwo>Currencies: </HeadingTwo>
                    <HeadingThree>
                      {Object.values(currencies)[0].name}
                    </HeadingThree>
                  </CountryInfo>
                  <CountryInfo>
                    <HeadingTwo>Languages: </HeadingTwo>
                    <HeadingThree>{Object.values(languages)[0]}</HeadingThree>
                  </CountryInfo>
                </CountryInfoSeparator>
                {/* Separator */}
                <CountryInfoSeparator>
                  <CountryInfo>
                    <HeadingTwo>Borders: </HeadingTwo>
                    {borders.map((borderCountry) => (
                      <HeadingThree key={borderCountry}>
                        <TouchableOpacity>
                          <BorderCountry>{borderCountry}</BorderCountry>
                        </TouchableOpacity>
                      </HeadingThree>
                    ))}
                  </CountryInfo>
                </CountryInfoSeparator>
              </View>
            )
          )}
        </Country>
      )}
    </Container>
  );
}
