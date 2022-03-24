import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  /* flex: 1; */
  margin: 30px 0;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  height: 100%;
`;

export const ReturnButton = styled.TouchableOpacity`
  padding: 14px 30px;
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 5px;
  background-color: ${(props) => props.theme.background};
  margin: 10px 250px 10px 40px;
  justify-content: center;
`;

export const ReturnButtonText = styled.Text`
  color: ${(props) => props.theme.color};
  font-size: 16px;
  text-align: center;
  margin: 0 auto;
`;

export const CountryScreen = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
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
  font-family: "NunitoSans-Light";
  font-size: 16px;
  padding: 2px 0;
  margin: 0 2px;
  color: ${(props) => props.theme.color};
`;
