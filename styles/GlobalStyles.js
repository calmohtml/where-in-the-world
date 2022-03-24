import styled from "styled-components/native";

/* 
Dark Blue: #2b3945;
Very Dark Blue: #202c37;
Very Dark Blue: #111517;
Dark Gray: #858585;
Very Light Gray: #fafafa;
White: #ffffff; 
*/

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
