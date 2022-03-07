import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function SearchBar() {
  const Container = styled.View`
    height: 60px;
    width: 100%;
    background: red;
    display: flex;
    justify-content: space-between;
    flex: 1;
    flex-direction: row;
    padding: 30px 10px;
  `;

  return (
    <Container>
      <Text>Where in the world?</Text>
      <TouchableOpacity>
        <Text>Dark Mode</Text>
      </TouchableOpacity>
    </Container>
  );
}
