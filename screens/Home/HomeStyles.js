import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 20px 0;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
`;

export const List = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  margin: 0 auto;
  width: 80%;
`;

export const CountryContainer = styled.TouchableOpacity`
  margin: 20px 0;
  background-color: ${(props) => props.theme.background};
  flex: 1;
  justify-content: center;
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
`;

export const CountryFlagContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const CountryFlag = styled.Image`
  width: 100%;
  height: 200px;
`;

export const CountryName = styled.View`
  margin: 10px 0;
  padding: 10px;
`;

export const CountryInfo = styled.View`
  padding-left: 10px;
  padding-bottom: 10px;
  flex-direction: row;
`;
