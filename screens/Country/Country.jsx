import { View, ActivityIndicator, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
} from "../../styles/GlobalStyles";

import {
  Container,
  ReturnButton,
  ReturnButtonText,
  CountryScreen,
  CountryFlagContainer,
  CountryFlag,
  CountryInfoSeparator,
  CountryName,
  CountryInfo,
  BorderCountry,
} from "./CountryStyles";

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
  } else {
    return (
      <Container>
        <Header />
        <ReturnButton onPress={() => navigation.navigate("Home")}>
          <ReturnButtonText>Go back</ReturnButtonText>
        </ReturnButton>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <CountryScreen>
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
                      <HeadingTwo>Sub Region: </HeadingTwo>
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
                      <HeadingTwo>Top Level domain: </HeadingTwo>
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
                        <TouchableOpacity key={borderCountry}>
                          <BorderCountry>{borderCountry}</BorderCountry>
                        </TouchableOpacity>
                      ))}
                    </CountryInfo>
                  </CountryInfoSeparator>
                </View>
              )
            )}
          </CountryScreen>
        )}
      </Container>
    );
  }
}
