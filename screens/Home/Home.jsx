import {
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import Header from "../../components/Header";
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

  return (
    <Container>
      <Header />
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: "darkorange" }}>
          {data.map(({ cca3, name, population, region, capital }) => (
            <TouchableOpacity
              key={cca3}
              onPress={() => {
                navigation.navigate("Country", {
                  countryName: name.common,
                });
              }}
            >
              <Text>{name.common}</Text>
              <Text>
                Population:{" "}
                {numbro(population).format({ thousandSeparated: true })}
              </Text>
              <Text>Region: {region}</Text>
              <Text>Capital: {capital}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
