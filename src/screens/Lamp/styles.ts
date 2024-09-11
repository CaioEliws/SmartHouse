import styled from "styled-components/native";

export const LampContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ContentLamp = styled.View`
    flex: 1;
    margin-right: 30px;
    margin-left: 30px;
  
    gap: 16px;
`;

export const TitleText = styled.Text`
    font-size: 24px;
    margin-left: 30px;
    margin-bottom: 16px;
`;