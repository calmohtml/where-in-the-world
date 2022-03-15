import { TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function Header() {
  const Header = styled.View`
    height: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: white;
  `;

  const HeadingOne = styled.Text`
    font-family: "NunitoSans-ExtraBold";
  `;

  const HeadingTwo = styled.Text`
    font-family: "NunitoSans-SemiBold";
  `;

  return (
    <Header>
      <HeadingOne>Where in the world?</HeadingOne>
      <TouchableOpacity>
        <HeadingTwo>Dark Mode</HeadingTwo>
      </TouchableOpacity>
    </Header>
  );
}
