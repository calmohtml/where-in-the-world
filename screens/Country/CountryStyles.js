import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 20px 0;
  flex-direction: column;
`;

export const CountryScreen = styled.View`
  flex: 1;
  background-color: #f1f1f1;
  margin: 0 auto;
  width: 80%;
`;

export const CountryFlagContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const CountryFlag = styled.Image`
  width: 100%;
  height: 200px;
`;

export const CountryInfoSeparator = styled.View`
  margin-bottom: 30px;
`;

export const CountryName = styled.View`
  margin: 10px 0;
  padding: 5px;
`;

export const CountryInfo = styled.View`
  padding-left: 5px;
  padding-bottom: 10px;
  flex-direction: row;
`;

export const BorderCountry = styled.Text`
  margin: 0 2.5px;
`;
