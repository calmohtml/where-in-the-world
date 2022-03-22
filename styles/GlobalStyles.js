import styled from "styled-components/native";

export const HeadingOne = styled.Text`
  font-family: "NunitoSans-ExtraBold";
  font-size: 24px;
  color: ${(props) => props.theme.color};
`;

export const HeadingTwo = styled.Text`
  font-family: "NunitoSans-SemiBold";
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.theme.color};
`;

export const HeadingThree = styled.Text`
  font-family: "NunitoSans-Light";
  font-size: 16px;
  padding: 2px 0;
  color: ${(props) => props.theme.color};
`;
