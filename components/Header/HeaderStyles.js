import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: ${(props) => props.theme.background};
`;
