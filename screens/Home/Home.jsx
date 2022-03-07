import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
/* 
import { useFetch } from "./hooks/useFetch";
*/

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /* https://restcountries.com/v3.1/name/{name}?fullText=true */
  /* https://restcountries.com/v3.1/name/${name.common}?fullText=true */
  const BASE_URL = "https://restcountries.com/v3.1/";
  const url = BASE_URL + "/all";

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
    <>
      <SearchBar />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView style={styles.countrylist}>
          {data.map(({ cca3, name, population, region, capital }) => (
            <TouchableOpacity
              key={cca3}
              style={styles.country}
              /* onPress={() => console.log(name.common)} */
              /* onPress={() => navigation.navigate("Country")} */
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate("Country", {
                  countryName: name.common,
                });
              }}
            >
              <Text>{name.common}</Text>
              <Text>Population: {population}</Text>
              <Text>Region: {region}</Text>
              <Text>Capital: {capital}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </>
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

const styles = StyleSheet.create({
  countrylist: {
    flex: 2,
  },
  country: {
    marginVertical: 20,
  },
});
