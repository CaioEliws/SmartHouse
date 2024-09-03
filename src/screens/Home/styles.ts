import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  flex: 1;
  margin-right: 30px;
  margin-left: 30px;
  
  gap: 16px;
`;