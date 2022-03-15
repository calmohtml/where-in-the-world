import {
  Image,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useState, useEffect, Fragment } from "react";
import styled from "styled-components/native";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
// import { useFetch } from "./hooks/useFetch";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const BASE_URL = "https://restcountries.com/v3.1/";
  const url = BASE_URL + "/all";
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

  const List = styled.ScrollView`
    flex: 1;
    background-color: #f1f1f1;
    margin: 0 auto;
    width: 85%;
  `;

  const CountryContainer = styled.TouchableOpacity`
    margin: 10px 0;
    background-color: white;
    padding: 0px;
    flex: 1;
    justify-content: center;
  `;

  const CountryFlagContainer = styled.View`
    display: flex;
    align-items: center;
  `;

  const CountryFlag = styled.Image`
    width: 100%;
    height: 200px;
  `;

  const CountryName = styled.View`
    margin: 10px 0;
  `;

  const CountryInfo = styled.View`
    flex-direction: row;
  `;

  return (
    <Container>
      <Header />
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Fragment>
          <SearchBar />
          <List>
            {data.map(({ cca3, flags, name, population, region, capital }) => (
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
            ))}
          </List>
        </Fragment>
      )}
    </Container>
  );
}

{
  /* 
  <FlatList
    data={
      //the array to render
    }
    keyExtractor={
      // Extract keys for each item in the array
    }
    renderItem={
      //each item from the array will be rendered here
    }
  /> 
  */
}
