import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function Header() {
  const Header = styled.View`
    background-color: red;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <Header>
      <Text>Where in the world?</Text>
      <TouchableOpacity>
        <Text>Dark Mode</Text>
      </TouchableOpacity>
    </Header>
  );
}
