import { ActivityIndicator } from "react-native";
import { useState, useEffect, Fragment } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar";
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
} from "../../styles/GlobalStyles";

import {
  Container,
  List,
  CountryContainer,
  CountryFlagContainer,
  CountryFlag,
  CountryName,
  CountryInfo,
} from "./HomeStyles";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const BASE_URL = "https://restcountries.com/v3.1/";
  const url = BASE_URL + "/all";
  const numbro = require("numbro");

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
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <Fragment>
            <SearchBar />
            <List>
              {data.map(
                ({ cca3, flags, name, population, region, capital }) => (
                  <CountryContainer
                    key={cca3}
                    onPress={() => {
                      navigation.navigate("Country", {
                        countryName: name.common,
                      });
                    }}
                  >
                    <CountryFlagContainer>
                      <CountryFlag source={{ uri: `${flags.png}` }} />
                    </CountryFlagContainer>
                    <CountryName>
                      <HeadingOne>{name.common}</HeadingOne>
                    </CountryName>
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
                      <HeadingTwo>Capital: </HeadingTwo>
                      <HeadingThree>{capital}</HeadingThree>
                    </CountryInfo>
                  </CountryContainer>
                )
              )}
            </List>
          </Fragment>
        )}
      </Container>
    );
  }
}
