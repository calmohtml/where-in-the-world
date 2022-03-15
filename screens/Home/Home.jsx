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

  return (
    <Container>
      <Header />
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <Fragment>
          <SearchBar />
          <ScrollView style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
            {data.map(({ cca3, flags, name, population, region, capital }) => (
              <TouchableOpacity
                key={cca3}
                onPress={() => {
                  navigation.navigate("Country", {
                    countryName: name.common,
                  });
                }}
              >
                <View>
                  <Image
                    source={{ uri: `${flags.png}` }}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View>
                  <HeadingOne>{name.common}</HeadingOne>
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
                  <HeadingTwo>Capital: </HeadingTwo>
                  <HeadingThree>{capital}</HeadingThree>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
